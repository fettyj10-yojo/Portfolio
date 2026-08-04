"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const links = ["Expertise", "Experience", "Toolkit", "About", "Contact"];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-8 lg:px-16">
      <Link href="#top" className="text-xl font-semibold tracking-tight text-foreground">
        JACOB<span className="text-primary">.</span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
        {links.map((link) => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            {link}
          </Link>
        ))}
      </nav>
      <Button
        variant="navCta"
        size="lg"
        className="hidden rounded-lg px-6 text-xs uppercase tracking-widest md:inline-flex"
        onClick={() => { window.location.href = "mailto:fettyj10@gmail.com"; }}
      >
        Let&apos;s talk
      </Button>
    </header>
  );
}
