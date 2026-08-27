'use client';

import { useEffect, useRef } from 'react';

export default function PointerBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (
      !container ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;

    let frame = 0;
    let isVisible = true;

    const handlePointerMove = (event: PointerEvent) => {
      if (!isVisible) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        container.style.setProperty(
          '--pointer-x',
          `${event.clientX - rect.left}px`,
        );
        container.style.setProperty(
          '--pointer-y',
          `${event.clientY - rect.top}px`,
        );
      });
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (!isVisible) cancelAnimationFrame(frame);
    });

    observer.observe(container);
    container.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className='bg-hero-bg relative h-full w-full overflow-hidden'
    >
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,hsl(var(--primary)/0.08),transparent_42%),linear-gradient(145deg,hsl(var(--hero-bg)),hsl(var(--background)))]' />
      <div className='pointer-glow absolute inset-0' />
      <div className='absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.025)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]' />
      <div className='pointer-foreground absolute inset-0' />
    </div>
  );
}
