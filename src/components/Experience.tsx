'use client';

import { portfolioData } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="border-b border-border py-20 sm:py-24">
      <div
        ref={ref}
        className={`reveal-root mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <p className="reveal font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Professional Experience
        </p>
        <h2 className="reveal mt-3 font-display text-4xl sm:text-5xl">Work</h2>
        <p className="reveal mt-3 max-w-2xl text-muted">
          Most recent first. Android product work, full-stack apps, and current
          agent-evaluation work at Handshake AI.
        </p>

        <div className="mt-12 space-y-12">
          {portfolioData.experience.map((exp) => (
            <article key={exp.company} className="reveal grid gap-4 md:grid-cols-[220px_1fr]">
              <div>
                <h3 className="font-display text-2xl">{exp.company}</h3>
                <p className="mt-1 text-sm text-muted">{exp.duration}</p>
                <p className="text-sm text-muted">{exp.location}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-accent">{exp.position}</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
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
