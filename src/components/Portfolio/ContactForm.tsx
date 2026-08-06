"use client";

import { FormEvent, useState } from "react";

type Status = { type: "idle" | "sending" | "success" | "error"; message: string };

const fieldClass = "w-full rounded-lg border border-border bg-muted/70 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/15";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ type: "sending", message: "Sending your message…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Unable to send your message.");

      form.reset();
      setStatus({ type: "success", message: data.message });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Unable to send your message." });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-3xl rounded-2xl border border-primary/15 bg-hero-bg p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-primary/55 hover:shadow-[0_28px_90px_rgba(5,230,1,0.16),0_0_28px_rgba(5,230,1,0.08)] focus-within:-translate-y-1 focus-within:border-primary/55 focus-within:shadow-[0_28px_90px_rgba(5,230,1,0.16),0_0_28px_rgba(5,230,1,0.08)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" autoComplete="given-name" required />
        <Field label="Last name" name="lastName" autoComplete="family-name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-foreground/75">Message</label>
        <textarea id="message" name="message" rows={6} minLength={10} maxLength={5000} required placeholder="Tell me about the role, project, or problem you are working on." className={fieldClass} />
      </div>
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={status.type === "sending"} className="cyber-button inline-flex min-w-36 items-center justify-center rounded-sm bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition hover:brightness-110 active:scale-[0.97] disabled:cursor-wait disabled:opacity-60">
          {status.type === "sending" ? "Sending…" : "Send message"}
        </button>
        <p role="status" aria-live="polite" className={`text-sm ${status.type === "success" ? "text-primary" : status.type === "error" ? "text-red-400" : "text-muted-foreground"}`}>
          {status.message || "Your details are used only to respond to this inquiry."}
        </p>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-foreground/75">{label}</label>
      <input id={name} name={name} type={type} autoComplete={autoComplete} required={required} maxLength={type === "email" ? 254 : 80} className={fieldClass} />
    </div>
  );
}
