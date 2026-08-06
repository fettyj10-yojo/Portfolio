"use client";

import { useEffect } from "react";

type TextEffectProps = {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  trigger?: boolean;
  onComplete?: () => void;
};

export default function TextEffect({
  children,
  className = "",
  delay = 0,
  stagger = 0.04,
  trigger = true,
  onComplete,
}: TextEffectProps) {
  const segments = children.split(/(\s+)/);
  const characterCount = children.length;
  let characterIndex = 0;

  useEffect(() => {
    if (!trigger || !onComplete) return;
    const duration = (delay + Math.max(0, characterCount - 1) * stagger + 0.45) * 1000;
    const timer = window.setTimeout(onComplete, duration);
    return () => window.clearTimeout(timer);
  }, [characterCount, delay, onComplete, stagger, trigger]);

  return (
    <p aria-label={children} className={`whitespace-pre-wrap ${className}`}>
      {segments.map((segment, index) => {
        if (/^\s+$/.test(segment)) {
          characterIndex += segment.length;
          return segment;
        }

        return (
          <span
            aria-hidden="true"
            key={`${segment}-${index}`}
            className="inline-block"
          >
            {Array.from(segment).map((character, characterOffset) => {
              const animationDelay = delay + characterIndex++ * stagger;
              return (
                <span
                  key={`${character}-${characterOffset}`}
                  className={`${trigger ? "hero-reveal-character" : "opacity-0"} inline-block`}
                  style={{ animationDelay: `${animationDelay}s` }}
                >
                  {character}
                </span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
}
