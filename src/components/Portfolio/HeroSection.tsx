"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ParticleName from "./ParticleName";
import SplineBackground from "./SplineBackground";
import TextEffect from "./TextEffect";

export default function HeroSection() {
  const splineContainerRef = useRef<HTMLDivElement>(null);
  const [nameComplete, setNameComplete] = useState(false);
  const [statementComplete, setStatementComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

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
    <section id="top" className="section-lightning relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-bg">
      <div ref={splineContainerRef} className="spline-interaction-layer absolute inset-0">
        <SplineBackground />
      </div>
      <div className="pointer-events-none absolute inset-0 z-1 bg-black/30" />
      <div className="pointer-events-none relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-28 text-center md:px-10">
        <p className="mb-4 opacity-0 animate-fade-up text-xs font-medium uppercase tracking-[0.28em] text-primary [animation-delay:0.1s]">
          Industrial engineering · intelligence · software
        </p>
        <h1 className="mb-3 w-full max-w-4xl opacity-0 animate-fade-up [animation-delay:0.2s] md:mb-5">
          <ParticleName onComplete={() => setNameComplete(true)} />
        </h1>
        <div className="hero-headshot relative mb-6 size-[clamp(14rem,25vw,21rem)] shrink-0 opacity-0 animate-fade-in [animation-delay:0.25s] md:mb-8">
          <div className="absolute inset-[3%] rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-[7%] overflow-hidden rounded-full">
            <Image
              src="/portfolio-headshot.png"
              alt="Corporate headshot of Jacob Fetty"
              fill
              priority
              sizes="(max-width: 640px) 14rem, (max-width: 1024px) 25vw, 21rem"
              className="object-cover object-[center_32%]"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-hero-bg/35 via-transparent to-primary/10" />
          </div>
        </div>
        <TextEffect
          delay={isMobile ? 0.08 : 0.15}
          stagger={isMobile ? 0.03 : 0.045}
          trigger={nameComplete}
          onComplete={() => setStatementComplete(true)}
          className="mb-3 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light text-foreground/80 md:mb-6"
        >
          I turn complex systems into clear, actionable solutions.
        </TextEffect>
        <TextEffect
          delay={isMobile ? 0.12 : 0.2}
          stagger={isMobile ? 0.018 : 0.026}
          trigger={statementComplete}
          className="mb-4 max-w-3xl text-[clamp(0.875rem,1.5vw,1.25rem)] font-light leading-relaxed text-muted-foreground md:mb-8"
        >
          Industrial engineer and intelligence analyst applying React, SQL, data analysis, and AI-assisted workflows to high-stakes operational problems.
        </TextEffect>
        <div className="flex flex-wrap justify-center gap-3 opacity-0 animate-fade-up font-bold [animation-delay:0.7s]">
          <a href="/Jacob-Fetty-Resume.pdf" download="Jacob-Fetty-Resume.pdf" className="cyber-button pointer-events-auto cursor-pointer rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97] md:px-8 md:py-4">
            Download résumé
          </a>
          <a href="#experience" className="cyber-button cyber-button--light pointer-events-auto cursor-pointer rounded-sm bg-white px-6 py-3 text-sm text-background transition-all hover:brightness-90 active:scale-[0.97] md:px-8 md:py-4">
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
