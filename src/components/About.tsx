'use client';

import { portfolioData } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

const skillGroups = [
  { title: 'Languages', items: portfolioData.skills.languages },
  { title: 'Backend', items: portfolioData.skills.backend },
  { title: 'Frontend', items: portfolioData.skills.frontend },
  { title: 'Databases', items: portfolioData.skills.databases },
  { title: 'Infrastructure', items: portfolioData.skills.devops },
  { title: 'Engineering', items: portfolioData.skills.concepts },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="border-b border-border py-20 sm:py-24">
      <div
        ref={ref}
        className={`reveal-root mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <p className="reveal font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Engineering Signals
        </p>
        <h2 className="reveal mt-3 font-display text-4xl sm:text-5xl">About</h2>
        <div className="reveal mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
          {portfolioData.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioData.achievements.map((item) => (
            <a
              key={item.platform}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal border-t border-border pt-4"
            >
              <h3 className="text-sm font-medium">{item.platform}</h3>
              <p className="mt-1 font-display text-2xl text-accent">{item.rating}</p>
              <p className="mt-1 text-sm text-muted">{item.rank}</p>
            </a>
          ))}
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="reveal">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed">{group.items.join(' / ')}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 border-t border-border pt-8">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            Education
          </h3>
          <p className="mt-2 font-display text-2xl">{portfolioData.education.school}</p>
          <p className="mt-1 text-sm text-muted">
            {portfolioData.education.degree}
          </p>
          <p className="mt-1 text-sm text-muted">
            {portfolioData.education.duration} · CGPA {portfolioData.education.cgpa}
          </p>
        </div>
      </div>
    </section>
  );
}
