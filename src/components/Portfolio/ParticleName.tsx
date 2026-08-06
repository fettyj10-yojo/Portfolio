"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  color: string;
  phase: number;
  releaseAt: number;
};

export default function ParticleName({ onComplete }: { onComplete?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let particles: Particle[] = [];
    let animationFrame = 0;
    let assemblyStart = performance.now();
    let hasCompleted = false;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const createParticles = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(300, rect.width);
      const height = Math.max(92, rect.height);

      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const textCanvas = document.createElement("canvas");
      textCanvas.width = Math.round(width);
      textCanvas.height = Math.round(height);
      const textContext = textCanvas.getContext("2d", { willReadFrequently: true });
      if (!textContext) return;

      const fontSize = Math.min(height * 0.72, width / 7.2);
      textContext.font = `700 ${fontSize}px Sora, sans-serif`;
      textContext.textAlign = "left";
      textContext.textBaseline = "middle";

      const first = "JACOB";
      const second = " FETTY";
      const firstWidth = textContext.measureText(first).width;
      const secondWidth = textContext.measureText(second).width;
      const startX = (width - firstWidth - secondWidth) / 2;
      const baseline = height / 2;

      const letterRanges: Array<{ start: number; end: number; order: number }> = [];
      let letterCursor = startX;
      let letterOrder = 0;
      for (const letter of `${first}${second}`) {
        const letterWidth = textContext.measureText(letter).width;
        if (letter !== " ") {
          letterRanges.push({ start: letterCursor, end: letterCursor + letterWidth, order: letterOrder });
          letterOrder += 1;
        }
        letterCursor += letterWidth;
      }

      textContext.fillStyle = "rgb(245, 245, 245)";
      textContext.fillText(first, startX, baseline);
      textContext.fillStyle = "rgb(3, 234, 0)";
      textContext.fillText(second, startX + firstWidth, baseline);

      const pixels = textContext.getImageData(0, 0, textCanvas.width, textCanvas.height).data;
      const nextParticles: Particle[] = [];
      const step = width < 500 ? 4 : 3;

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (Math.floor(y) * textCanvas.width + Math.floor(x)) * 4;
          if (pixels[index + 3] < 120) continue;

          const angle = Math.random() * Math.PI * 2;
          const distance = width * (0.35 + Math.random() * 0.45);
          const letter = letterRanges.find((range) => x >= range.start && x <= range.end);
          nextParticles.push({
            x: width / 2 + Math.cos(angle) * distance,
            y: height / 2 + Math.sin(angle) * distance * 0.45,
            tx: x,
            ty: y,
            vx: 0,
            vy: 0,
            color: `rgb(${pixels[index]}, ${pixels[index + 1]}, ${pixels[index + 2]})`,
            phase: Math.random() * Math.PI * 2,
            releaseAt: (letter?.order ?? 0) * 280,
          });
        }
      }

      particles = nextParticles;
      assemblyStart = performance.now();
    };

    const draw = (time = 0) => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / ratio;
      const height = canvas.height / ratio;
      const elapsed = time - assemblyStart;
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (reduceMotion) {
          particle.x = particle.tx;
          particle.y = particle.ty;
        } else {
          if (elapsed < particle.releaseAt) continue;
          const shimmer = Math.sin(time * 0.0015 + particle.phase) * 0.45;
          particle.vx = (particle.vx + (particle.tx - particle.x) * 0.016) * 0.9;
          particle.vy = (particle.vy + (particle.ty + shimmer - particle.y) * 0.016) * 0.9;
          particle.x += particle.vx;
          particle.y += particle.vy;
        }

        context.fillStyle = particle.color;
        const reveal = reduceMotion ? 1 : Math.min(1, (elapsed - particle.releaseAt) / 450);
        context.globalAlpha = reveal * (0.72 + Math.sin(time * 0.002 + particle.phase) * 0.2);
        context.fillRect(particle.x, particle.y, 1.8, 1.8);
      }

      context.globalAlpha = 1;
      if (!hasCompleted && (reduceMotion || elapsed >= 4800)) {
        hasCompleted = true;
        onComplete?.();
      }
      if (!reduceMotion) animationFrame = requestAnimationFrame(draw);
    };

    const rebuild = () => {
      cancelAnimationFrame(animationFrame);
      createParticles();
      draw();
    };

    const observer = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(rebuild, 100);
    });

    document.fonts.ready.then(rebuild);
    observer.observe(canvas);

    return () => {
      clearTimeout(resizeTimer);
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <span className="block w-full">
      <span className="sr-only">Jacob Fetty</span>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="block h-[clamp(6rem,12vw,9.5rem)] w-full drop-shadow-[0_0_18px_hsl(var(--primary)/0.2)]"
      />
    </span>
  );
}
