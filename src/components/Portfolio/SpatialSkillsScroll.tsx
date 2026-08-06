"use client";

import { useEffect, useRef, useState } from "react";

const coreSkills = [
  { label: "STRATEGIC VISION", x: 50, y: 50, start: 0.12, duration: 0.72, featured: true },
  { label: "MISSION READY", x: 15, y: 16, start: 0.02, duration: 0.3 },
  { label: "REACT", x: 39, y: 15, start: 0.16, duration: 0.3 },
  { label: "DATA ANALYTICS", x: 68, y: 17, start: 0.34, duration: 0.3 },
  { label: "TS/SCI", x: 87, y: 25, start: 0.08, duration: 0.3 },
  { label: "SQL", x: 12, y: 39, start: 0.28, duration: 0.3 },
  { label: "OPERATIONAL PLANNING", x: 82, y: 43, start: 0.46, duration: 0.3 },
  { label: "INTELLIGENCE FUSION", x: 17, y: 65, start: 0.42, duration: 0.3 },
  { label: "PROCESS IMPROVEMENT", x: 80, y: 68, start: 0.2, duration: 0.3 },
  { label: "JAVASCRIPT", x: 34, y: 82, start: 0.5, duration: 0.3 },
  { label: "RISK MANAGEMENT", x: 65, y: 84, start: 0.1, duration: 0.3 },
  { label: "THREAT ASSESSMENT", x: 8, y: 86, start: 0.58, duration: 0.3 },
  { label: "CROSS-FUNCTIONAL LEADERSHIP", x: 84, y: 88, start: 0.64, duration: 0.28 },
];

const additionalBuzzwords = [
  "COLLECTION",
  "PROCESSING",
  "EXPLOITATION",
  "DISSEMINATION",
  "TARGETING",
  "GEOINT",
  "SIGINT",
  "HUMINT",
  "OSINT",
  "MASINT",
  "TECHINT",
  "FININT",
  "CYBER INTELLIGENCE",
  "COUNTERINTELLIGENCE",
  "RISK ASSESSMENT",
  "MISSION ANALYSIS",
  "TREND ANALYSIS",
  "PATTERN ANALYSIS",
  "LINK ANALYSIS",
  "DATA FUSION",
  "STRATEGIC INTELLIGENCE",
  "OPERATIONAL INTELLIGENCE",
  "TACTICAL INTELLIGENCE",
  "INTELLIGENCE CYCLE",
  "PRIORITY INTELLIGENCE REQUIREMENTS",
  "COLLECTION MANAGEMENT",
  "INFORMATION SHARING",
  "SOURCE VALIDATION",
  "CRITICAL THINKING",
  "PROBLEM SOLVING",
  "FORECASTING",
  "RISK MITIGATION",
  "COURSE OF ACTION",
  "EXECUTIVE REPORTING",
  "AFTER ACTION REVIEW",
  "COMMON OPERATING PICTURE",
  "BATTLE RHYTHM",
  "PALANTIR",
  "ARCGIS",
  "TABLEAU",
  "MICROSOFT EXCEL",
  "SHAREPOINT",
  "CLOUD COMPUTING",
  "AWS",
  "AZURE",
  "POWER AUTOMATE",
  "POWER QUERY",
  "ETL",
  "API",
  "DATABASE",
  "DATA MINING",
  "DATA VISUALIZATION",
  "NETWORK ANALYSIS",
  "REAL-TIME INTELLIGENCE",
  "PROJECT MANAGEMENT",
  "STRATEGIC PLANNING",
  "SYNCHRONIZATION",
  "COORDINATION",
  "LOGISTICS",
  "SCHEDULING",
  "PERFORMANCE METRICS",
  "KPI",
  "LEAN",
  "SIX SIGMA",
  "RESOURCE ALLOCATION",
  "PERSONNEL MANAGEMENT",
  "QUALITY ASSURANCE",
  "COMPLIANCE",
  "GOVERNANCE",
  "CHANGE MANAGEMENT",
  "CONTINGENCY PLANNING",
  "CRISIS MANAGEMENT",
  "STANDARD OPERATING PROCEDURES",
  "MISSION EXECUTION",
  "MENTORSHIP",
  "COACHING",
  "COMMUNICATION",
  "INTEGRITY",
  "TRUST",
  "EMPOWERMENT",
  "INNOVATION",
  "VISION",
  "MISSION FOCUSED",
  "CONFLICT RESOLUTION",
  "NEGOTIATION",
  "SERVANT LEADERSHIP",
  "ETHICS",
  "PROFESSIONALISM",
  "CANDIDATE EXPERIENCE",
  "APPLICANT TRACKING",
  "EMPLOYER BRANDING",
  "CANDIDATE SOURCING",
  "ONBOARDING",
  "RETENTION",
  "MARKET ANALYSIS",
  "COMMUNITY OUTREACH",
  "PUBLIC SPEAKING",
  "CONSULTATIVE SELLING",
  "CLIENT RELATIONS",
  "LEAD GENERATION",
] as const;

const spatialPositions = [
  [6, 10], [17, 14], [29, 9], [40, 17], [61, 11], [72, 18], [84, 10], [94, 16],
  [8, 29], [20, 34], [33, 27], [43, 36], [58, 29], [69, 37], [82, 30], [93, 35],
  [7, 48], [19, 54], [31, 45], [42, 57], [59, 45], [70, 55], [83, 47], [94, 53],
  [8, 68], [21, 73], [34, 65], [43, 75], [58, 67], [69, 76], [81, 66], [93, 72],
  [6, 88], [18, 83], [30, 91], [41, 84], [60, 89], [72, 82], [84, 91], [95, 85],
] as const;

const additionalSkills = additionalBuzzwords.map((label, index) => {
  const [baseX, baseY] = spatialPositions[index % spatialPositions.length];
  const pass = Math.floor(index / spatialPositions.length);
  const duration = 0.35;
  const phase = (index * 0.61803398875) % 1;

  return {
    label,
    x: Math.min(94, Math.max(6, baseX + ((pass % 3) - 1) * 2.5)),
    y: Math.min(90, Math.max(9, baseY + ((pass % 2) * 2 - 1) * 1.5)),
    start: -duration * 0.45 + phase * (1 - duration * 0.1),
    duration,
    featured: false,
    band: "middle" as const,
  };
});

const skills = [...coreSkills, ...additionalSkills];
const mobileSkills = [...coreSkills, ...additionalSkills.slice(0, 32)];

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export default function SpatialSkillsScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [isMobile, setIsMobile] = useState(false);
  const visibleSkills = isMobile ? mobileSkills : skills;

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let isVisible = false;

    const render = () => {
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, rect.height - window.innerHeight);
      const progress = clamp(-rect.top / distance);

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const skill = visibleSkills[index];
        if (!skill) return;

        if (reducedMotion.matches) {
          item.style.transform = "translate(-50%, -50%) translateZ(0)";
          item.style.opacity = "1";
          item.style.filter = "none";
          return;
        }

        const localProgress = clamp((progress - skill.start) / skill.duration);
        const band = "band" in skill ? skill.band : "middle";
        const [startDepth, endDepth] = isMobile
          ? [-500, 420]
          :
          band === "background"
            ? [-1500, 500]
            : band === "foreground"
              ? [-700, 1300]
              : [-1050, 950];
        const depth = startDepth + localProgress * (endDepth - startDepth);
        const opacityLimit = band === "background" ? 0.5 : band === "middle" ? 0.82 : 1;
        const visibility = Math.sin(localProgress * Math.PI) * opacityLimit;
        const blur = Math.abs(localProgress - 0.5) * (isMobile ? 4 : 10);

        item.style.transform = `translate(-50%, -50%) translateZ(${depth}px)`;
        item.style.opacity = String(Math.max(0, visibility));
        item.style.filter = `blur(${blur}px)`;
      });
    };

    const requestRender = () => {
      if (!isVisible) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(render);
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) requestRender();
    }, { rootMargin: "20% 0px" });
    visibilityObserver.observe(section);

    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    reducedMotion.addEventListener("change", requestRender);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      reducedMotion.removeEventListener("change", requestRender);
      visibilityObserver.disconnect();
    };
  }, [visibleSkills]);

  return (
    <div ref={sectionRef} className="spatial-scroll" aria-label={`Key skills: ${visibleSkills.map(({ label }) => label).join(", ")}`}>
      <div className="spatial-scroll__stage" aria-hidden="true">
        <div className="spatial-scroll__frame" />
        {visibleSkills.map((skill, index) => (
          <span
            key={skill.label}
            ref={(element) => { itemRefs.current[index] = element; }}
            className={`spatial-scroll__item${skill.featured ? " spatial-scroll__item--featured" : ""}${"band" in skill ? ` spatial-scroll__item--${skill.band}` : " spatial-scroll__item--middle"}`}
            style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
          >
            {skill.label}
          </span>
        ))}
        <p className="spatial-scroll__hint">Scroll to explore capabilities</p>
      </div>
    </div>
  );
}
