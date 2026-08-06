"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = ["Expertise", "Experience", "Toolkit", "About", "Contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b px-6 py-5 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 md:px-8 lg:px-16 ${
        isScrolled
          ? "border-border/70 bg-background/88 shadow-[0_14px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/78"
          : "border-transparent bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <Link href="#top" className="text-xl font-semibold tracking-tight text-foreground">
        JACOB<span className="text-primary">.</span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
        {links.map((link) => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            className="cyber-nav-link text-xs uppercase tracking-[0.16em] text-muted-foreground"
          >
            {link}
          </Link>
        ))}
      </nav>
      <Button
        variant="navCta"
        size="lg"
        className="cyber-button hidden rounded-lg px-6 text-xs uppercase tracking-widest md:inline-flex"
        onClick={() => { window.location.href = "/Jacob-Fetty-Resume.pdf"; }}
      >
        View résumé
      </Button>
    </header>
  );
}
