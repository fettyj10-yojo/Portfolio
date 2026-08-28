import ContactForm from "./ContactForm";
import PointerBackground from "./PointerBackground";
import ProjectsCarousel from "./ProjectsCarousel";
import { LinkedinIcon } from "@/assets/icons";

const disciplines = [
  ["Software & Data", "React, JavaScript, SQL/MySQL, Git, GitHub, data analytics, and AI-assisted workflow development."],
  ["Engineering Systems", "Industrial engineering, AutoCAD, SOLIDWORKS, MATLAB, process improvement, and technical documentation."],
  ["Mission Intelligence", "Intelligence fusion, predictive and pattern analysis, threat assessment, and operational planning."],
];

const tools = ["React.js", "JavaScript", "HTML5 / CSS3", "SQL / MySQL", "Git / GitHub", "AutoCAD", "SOLIDWORKS", "MATLAB", "Data Analytics", "AI Prompt Engineering"];

export default function PortfolioSections() {
  return (
    <div className="bg-background">
      <section data-scroll-reveal id="experience" className="section-lightning border-y border-border bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 pt-28 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
          <div>
            <p className="section-kicker">Selected impact</p>
            <h2 className="section-heading">Leadership that moves missions forward.</h2>
            <p className="mt-6 max-w-xs text-sm font-light leading-6 text-muted-foreground">A record of converting complex information, competing priorities, and strict requirements into measurable outcomes.</p>
          </div>
          <div className="space-y-12">
            <Experience role="Military Intelligence Analyst" org="United States Army" text="Collected, analyzed, sanitized, and disseminated 1,200+ intelligence products supporting joint operations and contributing to the capture or neutralization of 375+ high-value targets." />
            <Experience role="APG Mission Manager" org="United States Army" text="Tracked operational activity across CENTCOM and SOUTHCOM, applying intelligence fusion, predictive analysis, pattern analysis, and threat assessment to commander decision-making." />
            <Experience role="Operations Manager" org="United States Army" text="Directed company-level operations for 210 personnel, coordinating training schedules, task orders, and pre-deployment readiness while overseeing compliance programs for driver qualification, safety, and recurring annual requirements. Maintained organizational accountability and ensured personnel remained trained, compliant, and mission-ready." />
            <Experience role="Recruiter / Operations Specialist" org="United States Army" text="Built strategic community partnerships and used operational metrics and trend analysis to exceed an individual recruiting mission by 20% in a historically challenging environment." />
          </div>
        </div>
      </section>

      <section data-scroll-reveal id="expertise" className="section-lightning mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-16">
        <p className="section-kicker">Core expertise</p>
        <h2 className="section-heading">Built for problems that cross disciplines.</h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {disciplines.map(([title, copy]) => (
            <article key={title} className="bg-background p-8 lg:p-10">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-4 font-light leading-7 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-scroll-reveal id="toolkit" className="section-lightning mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-16">
        <p className="section-kicker">Technical toolkit</p>
        <h2 className="section-heading">From CAD to code to intelligence.</h2>
        <div className="mt-12 flex flex-wrap gap-3">
          {tools.map((tool) => <span key={tool} className="rounded-full border border-border bg-muted px-5 py-3 text-sm text-foreground/80">{tool}</span>)}
        </div>
        <div className="mt-16 border-t border-border pt-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="section-kicker">Verified credentials</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">COITB development badges</h3>
            </div>
            <p className="hidden max-w-sm text-right text-sm font-light leading-6 text-muted-foreground md:block">Industry-issued recognition of practical front-end development skills.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            <BadgeCard
              src="/badges/javascript-professional-developer.png"
              alt="COITB Professional JavaScript Developer badge"
              title="JavaScript"
              credentialHref="https://www.credly.com/badges/2cfac4ff-bd5f-4175-ae21-1f71ed74d6e1/public_url"
            />
            <BadgeCard
              src="/badges/html-css-web-designer.png"
              alt="COITB HTML CSS Web Designer badge"
              title="HTML & CSS"
              credentialHref="https://www.credly.com/badges/a2967bb3-007f-4c19-adf3-1b978d003fdb/public_url"
              imageClassName="-translate-y-[17.5px]"
            />
          </div>
        </div>
      </section>

      <section data-scroll-reveal id="about" className="section-lightning border-y border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-28 md:px-10 lg:grid-cols-2 lg:px-16">
          <div>
            <p className="section-kicker">Education & trust</p>
            <h2 className="section-heading">Engineering rigor. Operational judgment.</h2>
          </div>
          <div className="space-y-8 text-lg font-light leading-8 text-muted-foreground">
            <p>Bachelor of Science in Industrial Engineering from East Carolina University, with active development in React.js and MySQL.</p>
            <p>Active TS/SCI security clearance and a record of handling sensitive information under strict security standards.</p>
            <p>CoITB certified in HTML/CSS and JavaScript.</p>
          </div>
          <div className="lg:col-span-2">
            <ProjectsCarousel />
          </div>
        </div>
      </section>

      <section data-scroll-reveal id="contact" className="section-lightning relative overflow-hidden bg-hero-bg">
        <div className="pointer-background-layer absolute inset-0 opacity-55" aria-hidden="true">
          <PointerBackground />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-black/55" />
        <div className="pointer-events-none relative z-10 mx-auto max-w-7xl px-6 py-28 text-center md:px-10 lg:px-16">
          <p className="section-kicker">Next mission</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-tight tracking-[-0.04em]">Let&apos;s build something that matters.</h2>
          <ContactForm />
          <div className="pointer-events-auto mt-8 flex items-center justify-center gap-4" aria-label="Professional profiles">
            <a href="https://github.com/fettyj10-yojo" target="_blank" rel="noreferrer" aria-label="Jacob Fetty on GitHub" className="border-border bg-background/40 text-muted-foreground hover:border-primary/60 hover:text-primary flex size-12 items-center justify-center rounded-full border transition-colors">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/jacob-fetty-eng-dev/" target="_blank" rel="noreferrer" aria-label="Jacob Fetty on LinkedIn" className="border-border bg-background/40 text-muted-foreground hover:border-primary/60 hover:text-primary flex size-12 items-center justify-center rounded-full border transition-colors">
              <LinkedinIcon className="size-5" />
            </a>
          </div>
          <p className="mt-10 text-sm text-muted-foreground">Open to software, data, engineering, and operations opportunities.</p>
        </div>
      </section>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.58-.3-5.29-1.29-5.29-5.69 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.72 5.4-5.3 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function Experience({ role, org, text }: { role: string; org: string; text: string }) {
  return (
    <article className="border-l border-primary/50 pl-6">
      <p className="text-xs uppercase tracking-[0.16em] text-primary">{org}</p>
      <h3 className="mt-2 text-xl font-semibold text-foreground">{role}</h3>
      <p className="mt-3 font-light leading-7 text-muted-foreground">{text}</p>
    </article>
  );
}

function BadgeCard({ src, alt, title, credentialHref, imageClassName = "" }: { src: string; alt: string; title: string; credentialHref: string; imageClassName?: string }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-primary/15 bg-hero-bg p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-radial-[at_50%_35%] from-primary/10 via-transparent to-transparent" />
      <div className="relative flex aspect-square items-center justify-center">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.035] ${imageClassName}`}
        />
      </div>
      <div className="relative mt-5 flex items-center justify-between border-t border-border/70 pt-4">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <span className="text-[0.625rem] uppercase tracking-[0.18em] text-primary">COITB certified</span>
      </div>
      <a
        href={credentialHref}
        target="_blank"
        rel="noreferrer"
        className="cyber-button border-primary/40 bg-primary/10 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground relative mt-5 flex w-full items-center justify-center gap-2 rounded-sm border px-5 py-3 text-xs font-semibold tracking-[0.12em] uppercase transition-all"
        aria-label={`Verify ${title} certification on Credly`}
      >
        Verify on Credly
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
