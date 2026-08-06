"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ParticleName from "./ParticleName";
import SplineBackground from "./SplineBackground";
import TextEffect from "./TextEffect";

export default function HeroSection() {
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

  return (
    <section id="top" className="section-lightning relative flex h-svh min-h-[40rem] items-center justify-center overflow-hidden bg-hero-bg">
      <div className="spline-interaction-layer absolute inset-0">
        <SplineBackground />
      </div>
      <div className="pointer-events-none absolute inset-0 z-1 bg-black/30" />
      <div className="pointer-events-none relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-7 pt-24 text-center md:px-10 md:pb-8 md:pt-24">
        <p className="mb-2 opacity-0 animate-fade-up text-xs font-medium uppercase tracking-[0.28em] text-primary [animation-delay:0.1s] md:mb-3">
          Industrial engineering · intelligence · software
        </p>
        <h1 className="mb-1 w-full max-w-4xl opacity-0 animate-fade-up [animation-delay:0.2s] md:mb-2">
          <ParticleName onComplete={() => setNameComplete(true)} />
        </h1>
        <div className="hero-headshot relative mb-3 size-[clamp(11rem,24svh,18rem)] shrink-0 opacity-0 animate-fade-in [animation-delay:0.25s] md:mb-4">
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
          className="mb-2 text-[clamp(1.05rem,2.25vw,1.7rem)] font-light text-foreground/80 md:mb-3"
        >
          I turn complex systems into clear, actionable solutions.
        </TextEffect>
        <TextEffect
          delay={isMobile ? 0.12 : 0.2}
          stagger={isMobile ? 0.018 : 0.026}
          trigger={statementComplete}
          className="mb-3 max-w-3xl text-[clamp(0.825rem,1.35vw,1.1rem)] font-light leading-relaxed text-muted-foreground md:mb-4"
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
        <p className="mt-3 opacity-0 animate-fade-up text-xs font-light text-muted-foreground/60 [animation-delay:0.85s] md:mt-4">
          Active TS/SCI clearance · Open to software and data opportunities
        </p>
      </div>
    </section>
  );
}
