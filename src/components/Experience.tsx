'use client';

import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="py-20 sm:py-24">
      <div
        ref={ref}
        className={`reveal-root mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <p className="reveal text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Experience
        </p>
        <h2 className="reveal mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Work
        </h2>
        <div className="relative mt-10 space-y-8 border-l border-border pl-8">
          {portfolioData.experience.map((exp) => (
            <article key={exp.company} className="reveal relative">
              <span className="absolute -left-[39px] top-6 h-3 w-3 rounded-full bg-accent" />
              <div className="rounded-2xl border border-border bg-surface p-6">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  <Briefcase size={14} />
                  {exp.position}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold">{exp.company}</h3>
                <p className="mt-2 flex flex-wrap gap-4 text-sm text-muted">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={14} /> {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
