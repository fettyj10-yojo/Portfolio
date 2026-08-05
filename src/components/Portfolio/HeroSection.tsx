"use client";

import { useEffect, useRef } from "react";
import SplineBackground from "./SplineBackground";

export default function HeroSection() {
  const splineContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = splineContainerRef.current;
    if (!container) return;

    const forwardWheelToPage = (event: WheelEvent) => {
      if (event.ctrlKey) return;

      event.preventDefault();
      event.stopPropagation();

      const multiplier = event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? 16
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? window.innerHeight
          : 1;

      window.scrollBy({ top: event.deltaY * multiplier, behavior: "auto" });
    };

    container.addEventListener("wheel", forwardWheelToPage, { capture: true, passive: false });
    return () => container.removeEventListener("wheel", forwardWheelToPage, { capture: true });
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden bg-hero-bg">
      <div ref={splineContainerRef} className="absolute inset-0">
        <SplineBackground />
      </div>
      <div className="pointer-events-none absolute inset-0 z-1 bg-black/30" />
      <div className="pointer-events-none relative z-10 w-full max-w-[90%] px-6 pb-10 pt-32 sm:max-w-xl md:px-10 lg:max-w-3xl">
        <p className="mb-4 opacity-0 animate-fade-up text-xs font-medium uppercase tracking-[0.28em] text-primary [animation-delay:0.1s]">
          Industrial engineering · intelligence · software
        </p>
        <h1 className="mb-2 opacity-0 animate-fade-up text-[clamp(3rem,8vw,6rem)] font-bold uppercase leading-[1.05] tracking-[-0.05em] text-foreground [animation-delay:0.2s] md:mb-4">
          Jacob <span className="text-primary">Fetty</span>
        </h1>
        <p className="mb-3 opacity-0 animate-fade-up text-[clamp(1.125rem,2.5vw,1.875rem)] font-light text-foreground/80 [animation-delay:0.4s] md:mb-6">
          I turn complex systems into clear, actionable solutions.
        </p>
        <p className="mb-4 max-w-2xl opacity-0 animate-fade-up text-[clamp(0.875rem,1.5vw,1.25rem)] font-light leading-relaxed text-muted-foreground [animation-delay:0.55s] md:mb-8">
          Industrial engineer and intelligence analyst applying React, SQL, data analysis, and AI-assisted workflows to high-stakes operational problems.
        </p>
        <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up font-bold [animation-delay:0.7s]">
          <a href="/Jacob-Fetty-Resume.pdf" download="Jacob-Fetty-Resume.pdf" className="pointer-events-auto cursor-pointer rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97] md:px-8 md:py-4">
            Download résumé
          </a>
          <a href="#experience" className="pointer-events-auto cursor-pointer rounded-sm bg-white px-6 py-3 text-sm text-background transition-all hover:brightness-90 active:scale-[0.97] md:px-8 md:py-4">
            View experience
          </a>
        </div>
        <p className="mt-4 opacity-0 animate-fade-up text-xs font-light text-muted-foreground/60 [animation-delay:0.85s] md:mt-6">
          Active TS/SCI clearance · Open to software and data opportunities
        </p>
      </div>
    </section>
  );
}
