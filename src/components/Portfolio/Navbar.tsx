"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = ["Experience", "Expertise", "Toolkit", "About", "Contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
      <button
        type="button"
        aria-expanded={isMobileOpen}
        aria-controls="mobile-navigation"
        aria-label={isMobileOpen ? "Close navigation" : "Open navigation"}
        className="flex size-11 items-center justify-center border border-primary/25 bg-nav-button/70 text-primary md:hidden"
        onClick={() => setIsMobileOpen((open) => !open)}
      >
        <span className="relative block h-4 w-5" aria-hidden="true">
          <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${isMobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity ${isMobileOpen ? "opacity-0" : ""}`} />
          <span className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-transform ${isMobileOpen ? "-translate-y-[8px] -rotate-45" : ""}`} />
        </span>
      </button>
      <Button
        variant="navCta"
        size="lg"
        className="cyber-button rounded-lg px-3 text-[0.625rem] uppercase tracking-widest sm:px-4 md:px-6 md:text-xs"
        onClick={() => { window.location.href = "/Jacob-Fetty-Resume.pdf"; }}
      >
        <span className="md:hidden">Résumé</span>
        <span className="hidden md:inline">View résumé</span>
      </Button>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`absolute inset-x-4 top-[calc(100%+0.5rem)] grid overflow-hidden rounded-xl border border-primary/20 bg-background/95 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMobileOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            className="rounded-lg px-4 py-3 text-sm uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:bg-primary/8 hover:text-foreground"
            onClick={() => setIsMobileOpen(false)}
          >
            {link}
          </Link>
        ))}
      </nav>
    </header>
  );
}
