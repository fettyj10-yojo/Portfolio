const disciplines = [
  ["01", "Software & Data", "React, JavaScript, SQL/MySQL, Git, GitHub, data analytics, and AI-assisted workflow development."],
  ["02", "Engineering Systems", "Industrial engineering, AutoCAD, SOLIDWORKS, MATLAB, process improvement, and technical documentation."],
  ["03", "Mission Intelligence", "Intelligence fusion, predictive and pattern analysis, threat assessment, and operational planning."],
];

const tools = ["React.js", "JavaScript", "HTML5 / CSS3", "SQL / MySQL", "Git / GitHub", "AutoCAD", "SOLIDWORKS", "MATLAB", "Data Analytics", "AI Prompt Engineering"];

export default function PortfolioSections() {
  return (
    <div className="bg-background">
      <section id="expertise" className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-16">
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

      <section id="experience" className="border-y border-border bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
          <div>
            <p className="section-kicker">Selected impact</p>
            <h2 className="section-heading">Leadership that moved missions forward.</h2>
          </div>
          <div className="space-y-12">
            <Experience role="Military Intelligence Analyst" org="United States Army" text="Collected, analyzed, sanitized, and disseminated 1,200+ intelligence products supporting joint operations and contributing to the capture or neutralization of 375+ high-value targets." />
            <Experience role="APG Mission Manager" org="United States Army" text="Tracked operational activity across CENTCOM and SOUTHCOM, applying intelligence fusion, predictive analysis, pattern analysis, and threat assessment to commander decision-making." />
            <Experience role="Operations Manager" org="United States Army" text="Directed company-level operations for 210 personnel, coordinating training schedules, task orders, and pre-deployment readiness while overseeing compliance programs for driver qualification, safety, and recurring annual requirements. Maintained organizational accountability and ensured personnel remained trained, compliant, and mission-ready." />
            <Experience role="Recruiter / Operations Specialist" org="United States Army" text="Built strategic community partnerships and used operational metrics and trend analysis to exceed an individual recruiting mission by 20% in a historically challenging environment." />
          </div>
        </div>
      </section>

      <section id="toolkit" className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-16">
        <p className="section-kicker">Technical toolkit</p>
        <h2 className="section-heading">From CAD to code to intelligence.</h2>
        <div className="mt-12 flex flex-wrap gap-3">
          {tools.map((tool) => <span key={tool} className="rounded-full border border-border bg-muted px-5 py-3 text-sm text-foreground/80">{tool}</span>)}
        </div>
      </section>

      <section id="about" className="border-y border-border">
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
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 text-center md:px-10 lg:px-16">
        <p className="section-kicker">Next mission</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-tight tracking-[-0.04em]">Let&apos;s build something that matters.</h2>
        <a href="mailto:fettyj10@gmail.com" className="mt-10 inline-flex rounded-sm bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]">fettyj10@gmail.com</a>
        <p className="mt-8 text-sm text-muted-foreground">Greenville, North Carolina · (252) 481-7578</p>
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
