import Image from 'next/image';
import ParticleName from './ParticleName';
import SpatialSkillsScroll from './SpatialSkillsScroll';

export default function HeroSection() {
  return (
    <SpatialSkillsScroll hero>
      <div className='pointer-events-none absolute inset-0 z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 pt-24 pb-7 text-center md:px-10 md:pt-24 md:pb-8'>
        <p className='animate-fade-up text-primary mb-2 text-xs font-medium tracking-[0.28em] uppercase opacity-0 [animation-delay:0.1s] md:mb-3'>
          Industrial engineering · intelligence · software
        </p>
        <h1 className='animate-fade-up mb-1 w-full max-w-4xl opacity-0 [animation-delay:0.2s] md:mb-2'>
          <ParticleName />
        </h1>
        <div className='hero-headshot animate-fade-in relative mb-3 size-[clamp(11rem,24svh,18rem)] shrink-0 opacity-0 [animation-delay:0.25s] md:mb-4'>
          <div className='bg-primary/15 absolute inset-[3%] rounded-full blur-3xl' />
          <div className='absolute inset-[7%] overflow-hidden rounded-full'>
            <Image
              src='/portfolio-headshot.webp'
              alt='Corporate headshot of Jacob Fetty'
              fill
              priority
              sizes='(max-width: 640px) 14rem, (max-width: 1024px) 25vw, 21rem'
              className='object-cover object-[center_32%]'
            />
            <div className='from-hero-bg/35 to-primary/10 absolute inset-0 bg-linear-to-tr via-transparent' />
          </div>
        </div>
        <p className='text-foreground/80 mb-2 text-[clamp(1.05rem,2.25vw,1.7rem)] font-light md:mb-3'>
          I turn complex systems into clear, actionable solutions.
        </p>
        <p className='text-muted-foreground mb-3 max-w-3xl text-[clamp(0.825rem,1.35vw,1.1rem)] leading-relaxed font-light md:mb-4'>
          Industrial engineer and intelligence analyst applying React, SQL, data
          analysis, and AI-assisted workflows to high-stakes operational
          problems.
        </p>
        <div className='animate-fade-up flex flex-wrap justify-center gap-3 font-bold opacity-0 [animation-delay:0.7s]'>
          <a
            href='#experience'
            className='cyber-button cyber-button--light text-background pointer-events-auto cursor-pointer rounded-sm bg-white px-6 py-3 text-sm transition-all hover:brightness-90 active:scale-[0.97] md:px-8 md:py-4'
          >
            View experience
          </a>
        </div>
        <p className='animate-fade-up text-muted-foreground/60 mt-3 text-xs font-light opacity-0 [animation-delay:0.85s] md:mt-4'>
          Active TS/SCI clearance · Open to software and data opportunities
        </p>
      </div>
    </SpatialSkillsScroll>
  );
}
