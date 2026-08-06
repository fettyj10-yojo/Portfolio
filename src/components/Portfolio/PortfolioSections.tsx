import SpatialSkillsScroll from "./SpatialSkillsScroll";
import ContactForm from "./ContactForm";
import SplineBackground from "./SplineBackground";

const disciplines = [
  ["01", "Software & Data", "React, JavaScript, SQL/MySQL, Git, GitHub, data analytics, and AI-assisted workflow development."],
  ["02", "Engineering Systems", "Industrial engineering, AutoCAD, SOLIDWORKS, MATLAB, process improvement, and technical documentation."],
  ["03", "Mission Intelligence", "Intelligence fusion, predictive and pattern analysis, threat assessment, and operational planning."],
];

const tools = ["React.js", "JavaScript", "HTML5 / CSS3", "SQL / MySQL", "Git / GitHub", "AutoCAD", "SOLIDWORKS", "MATLAB", "Data Analytics", "AI Prompt Engineering"];

export default function PortfolioSections() {
  return (
    <div className="bg-background">
      <section id="expertise" className="section-lightning mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-16">
        <p className="section-kicker">Core expertise</p>
        <h2 className="section-heading">Built for problems that cross disciplines.</h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {disciplines.map(([number, title, copy]) => (
            <article key={number} className="bg-background p-8 lg:p-10">
              <span className="text-xs text-primary">{number}</span>
              <h3 className="mt-12 text-xl font-semibold">{title}</h3>
              <p className="mt-4 font-light leading-7 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-lightning border-y border-border bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 pt-28 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
          <div>
            <p className="section-kicker">Selected impact</p>
            <h2 className="section-heading">Leadership that moved missions forward.</h2>
            <p className="mt-6 max-w-xs text-sm font-light leading-6 text-muted-foreground">A record of converting complex information, competing priorities, and strict requirements into measurable outcomes.</p>
            <a
              href="/Jacob-Fetty-Resume.pdf"
              download="Jacob-Fetty-Resume.pdf"
              className="cyber-button mt-8 inline-flex items-center gap-3 rounded-sm border border-primary/50 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.97]"
            >
              Download résumé
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="space-y-12">
            <Experience role="Military Intelligence Analyst" org="United States Army" text="Collected, analyzed, sanitized, and disseminated 1,200+ intelligence products supporting joint operations and contributing to the capture or neutralization of 375+ high-value targets." />
            <Experience role="APG Mission Manager" org="United States Army" text="Tracked operational activity across CENTCOM and SOUTHCOM, applying intelligence fusion, predictive analysis, pattern analysis, and threat assessment to commander decision-making." />
            <Experience role="Operations Manager" org="United States Army" text="Directed company-level operations for 210 personnel, coordinating training schedules, task orders, and pre-deployment readiness while overseeing compliance programs for driver qualification, safety, and recurring annual requirements. Maintained organizational accountability and ensured personnel remained trained, compliant, and mission-ready." />
            <Experience role="Recruiter / Operations Specialist" org="United States Army" text="Built strategic community partnerships and used operational metrics and trend analysis to exceed an individual recruiting mission by 20% in a historically challenging environment." />
          </div>
        </div>
        <SpatialSkillsScroll />
      </section>

      <section id="toolkit" className="section-lightning mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-16">
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
            />
            <BadgeCard
              src="/badges/html-css-web-designer.png"
              alt="COITB HTML CSS Web Designer badge"
              title="HTML & CSS"
              imageClassName="-translate-y-[17.5px]"
            />
          </div>
        </div>
      </section>

      <section id="about" className="section-lightning border-y border-border">
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
          <figure className="group relative mx-auto mt-6 w-full max-w-4xl overflow-hidden rounded-xl border border-primary/20 bg-hero-bg shadow-[0_24px_80px_rgba(0,0,0,0.35)] lg:col-span-2">
            <div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-tr from-background/45 via-transparent to-primary/10" />
            <img
              src="/portfolio-signal-green.svg"
              alt="Signal Green emblem combining intelligence, engineering, and software development"
              loading="lazy"
              className="aspect-3/2 w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
            />
            <figcaption className="absolute bottom-4 left-4 z-2 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-[0.625rem] uppercase tracking-[0.2em] text-foreground/70 backdrop-blur-md">
              Intelligence · Engineering · Software
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="contact" className="section-lightning relative overflow-hidden bg-hero-bg">
        <div className="pointer-events-none absolute inset-0 opacity-55" aria-hidden="true">
          <SplineBackground />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 text-center md:px-10 lg:px-16">
          <p className="section-kicker">Next mission</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-tight tracking-[-0.04em]">Let&apos;s build something that matters.</h2>
          <ContactForm />
          <a href="/Jacob-Fetty-Resume.pdf" download="Jacob-Fetty-Resume.pdf" className="cyber-button mt-10 inline-flex rounded-sm bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]">Download sanitized résumé</a>
          <p className="mt-8 text-sm text-muted-foreground">Open to software, data, engineering, and operations opportunities.</p>
        </div>
      </section>
    </div>
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

function BadgeCard({ src, alt, title, imageClassName = "" }: { src: string; alt: string; title: string; imageClassName?: string }) {
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
    </article>
  );
}
