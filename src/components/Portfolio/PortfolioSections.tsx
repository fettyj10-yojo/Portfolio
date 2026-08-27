import ContactForm from "./ContactForm";
import PointerBackground from "./PointerBackground";
import ProjectsCarousel from "./ProjectsCarousel";

const disciplines = [
  ["Software & Data", "React, JavaScript, SQL/MySQL, Git, GitHub, data analytics, and AI-assisted workflow development."],
  ["Engineering Systems", "Industrial engineering, AutoCAD, SOLIDWORKS, MATLAB, process improvement, and technical documentation."],
  ["Mission Intelligence", "Intelligence fusion, predictive and pattern analysis, threat assessment, and operational planning."],
];

const tools = ["React.js", "JavaScript", "HTML5 / CSS3", "SQL / MySQL", "Git / GitHub", "AutoCAD", "SOLIDWORKS", "MATLAB", "Data Analytics", "AI Prompt Engineering"];

export default function PortfolioSections() {
  return (
    <div className="bg-background">
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
          <p className="mt-10 text-sm text-muted-foreground">Open to software, data, engineering, and operations opportunities.</p>
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
