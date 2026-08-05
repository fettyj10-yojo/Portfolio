import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(30).optional().default(""),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(0).optional().default(""),
});

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);

export async function POST(request: Request) {
  try {
    const parsed = contactSchema.safeParse(await request.json());

    if (!parsed.success) {
      return NextResponse.json({ message: "Please check the form fields and try again." }, { status: 400 });
    }

    if (parsed.data.website) {
      return NextResponse.json({ message: "Message received." });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !recipient) {
      console.error("Contact form environment variables are not configured.");
      return NextResponse.json({ message: "The contact form is temporarily unavailable." }, { status: 503 });
    }

    const { firstName, lastName, email, phone, message } = parsed.data;
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: `Portfolio inquiry from ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h2>New portfolio inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <hr />
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    if (result.error) {
      console.error("Resend contact delivery failed:", result.error.name);
      return NextResponse.json({ message: "Your message could not be sent. Please try again later." }, { status: 502 });
    }

    return NextResponse.json({ message: "Thanks—your message has been sent." });
  } catch (error) {
    console.error("Contact route failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ message: "Your message could not be sent. Please try again later." }, { status: 500 });
  }
}
