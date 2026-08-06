"use client";

import { lazy, Suspense, useEffect, useRef, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function SplineBackground() {
  const [canRenderSpline, setCanRenderSpline] = useState(false);
  const interactionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)");
    const update = () => setCanRenderSpline(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const container = interactionRef.current;
    if (!container) return;

    const preserveNativeScroll = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      event.stopPropagation();
    };

    container.addEventListener("wheel", preserveNativeScroll, { capture: true, passive: true });
    return () => container.removeEventListener("wheel", preserveNativeScroll, { capture: true });
  }, [canRenderSpline]);

  if (!canRenderSpline) {
    return <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,hsl(var(--primary)/0.1),transparent_42%),linear-gradient(145deg,hsl(var(--hero-bg)),hsl(var(--background)))]" />;
  }

  return (
    <div ref={interactionRef} className="h-full w-full">
      <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
        <Spline
          scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
          className="h-full w-full"
        />
      </Suspense>
    </div>
  );
}
