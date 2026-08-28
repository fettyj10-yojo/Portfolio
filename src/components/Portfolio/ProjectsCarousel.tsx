'use client';

import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    title: 'The Bean’s Place',
    description:
      'A responsive web experience built for The Bean’s Place and deployed as a production project on Vercel.',
    href: 'https://the-beans-place-2026.vercel.app/',
    image: '/projects/beans-place-hero.webp',
    stack: ['Web development', 'Responsive design', 'Vercel'],
    accent: 'from-amber-300/20 via-primary/5 to-transparent',
  },
  {
    title: 'Barbershop JS',
    description:
      'A responsive JavaScript web experience created for a barbershop and deployed as a production project on Vercel.',
    href: 'https://barbershop-js.vercel.app/',
    image: '/projects/barbershop-hero.webp',
    stack: ['JavaScript', 'Responsive design', 'Vercel'],
    accent: 'from-sky-300/20 via-primary/5 to-transparent',
  },
] as const;

export default function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const selectProject = (index: number) => {
    setActiveIndex((index + projects.length) % projects.length);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') selectProject(activeIndex - 1);
    if (event.key === 'ArrowRight') selectProject(activeIndex + 1);
  };

  return (
    <div
      className='border-primary/20 bg-hero-bg relative mx-auto mt-10 w-full max-w-5xl touch-pan-y overflow-hidden rounded-xl border shadow-[0_24px_80px_rgba(0,0,0,0.35)]'
      role='region'
      aria-roledescription='carousel'
      aria-label='Featured projects'
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div
        className='flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {projects.map((project, index) => (
          <article
            key={project.title}
            className='relative min-w-full overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12'
            aria-hidden={index !== activeIndex}
            aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
          >
            {'image' in project && (
              <>
                <img
                  src={project.image}
                  alt=''
                  loading='lazy'
                  decoding='async'
                  aria-hidden='true'
                  className='pointer-events-none absolute inset-0 h-full w-full object-cover opacity-65'
                />
                <div className='from-hero-bg via-hero-bg/90 to-hero-bg/55 pointer-events-none absolute inset-0 bg-linear-to-r' />
                <div className='from-hero-bg/80 to-hero-bg/45 pointer-events-none absolute inset-0 bg-linear-to-t via-transparent' />
              </>
            )}
            <div
              className={`pointer-events-none absolute inset-0 bg-linear-to-br ${project.accent}`}
            />
            <div className='relative grid min-h-64 content-between gap-12 md:grid-cols-[1fr_auto] md:items-end'>
              <div>
                <p className='text-primary text-xs tracking-[0.2em] uppercase'>
                  Featured project
                </p>
                <h3 className='text-foreground mt-5 text-[clamp(1.75rem,4vw,3.25rem)] font-semibold tracking-[-0.04em]'>
                  {project.title}
                </h3>
                <p className='text-muted-foreground mt-5 max-w-2xl leading-7 font-light'>
                  {project.description}
                </p>
                <ul
                  className='mt-7 flex flex-wrap gap-2'
                  aria-label='Technologies'
                >
                  {project.stack.map((technology) => (
                    <li
                      key={technology}
                      className='border-primary/15 bg-background/40 text-foreground/70 rounded-full border px-3 py-1.5 text-xs'
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex flex-col items-start gap-3'>
                <Link
                  href={project.href}
                  target={
                    project.href.startsWith('http') ? '_blank' : undefined
                  }
                  rel={
                    project.href.startsWith('http') ? 'noreferrer' : undefined
                  }
                  tabIndex={index === activeIndex ? 0 : -1}
                  className='cyber-button border-primary/50 bg-primary/10 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground inline-flex w-fit items-center gap-3 rounded-sm border px-5 py-3 text-sm font-semibold transition-all'
                >
                  {project.href.startsWith('http')
                    ? 'View live site'
                    : 'Explore project'}
                  <span aria-hidden='true'>↗</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className='border-border/70 relative flex items-center justify-between border-t px-4 py-3 sm:px-6'>
        <div
          className='flex gap-2'
          role='tablist'
          aria-label='Choose a project'
        >
          {projects.map((project, index) => (
            <button
              key={project.title}
              type='button'
              role='tab'
              aria-selected={index === activeIndex}
              aria-label={`Show ${project.title}`}
              onClick={() => selectProject(index)}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                index === activeIndex
                  ? 'bg-primary w-8'
                  : 'bg-foreground/20 hover:bg-foreground/40 w-3'
              }`}
            />
          ))}
        </div>
        <div className='flex gap-2'>
          <button
            type='button'
            aria-label='Previous project'
            onClick={() => selectProject(activeIndex - 1)}
            className='border-border bg-background/50 text-foreground hover:border-primary/60 hover:text-primary flex size-10 items-center justify-center rounded-full border transition-colors'
          >
            <span aria-hidden='true'>←</span>
          </button>
          <button
            type='button'
            aria-label='Next project'
            onClick={() => selectProject(activeIndex + 1)}
            className='border-border bg-background/50 text-foreground hover:border-primary/60 hover:text-primary flex size-10 items-center justify-center rounded-full border transition-colors'
          >
            <span aria-hidden='true'>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
