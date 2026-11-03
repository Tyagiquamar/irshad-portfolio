'use client';

import { Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Achievements() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="achievements" className="py-20 sm:py-24">
      <div
        ref={ref}
        className={`reveal-root mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <p className="reveal text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Competitive programming
        </p>
        <h2 className="reveal mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Achievements
        </h2>
        <p className="reveal mt-3 max-w-2xl text-lg text-muted">
          Ratings and ranks from the existing portfolio, with profile links
          preserved.
        </p>

        <dl className="reveal mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {portfolioData.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-surface px-4 py-5"
            >
              <dd className="font-display text-2xl font-semibold text-accent">
                {stat.value}
              </dd>
              <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioData.achievements.map((item, index) => (
            <a
              key={item.platform}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group rounded-2xl border border-border bg-surface p-5 transition hover:border-accent/50"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <h3 className="font-display text-lg font-semibold">{item.platform}</h3>
              <p className="mt-2 text-2xl font-semibold text-accent">{item.rating}</p>
              <p className="mt-1 text-sm text-muted">{item.rank}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                View profile
                <ExternalLink size={14} />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="reveal font-display text-xl font-semibold">Certifications</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioData.certificates.map((cert) => (
              <div
                key={cert.title}
                className="reveal rounded-2xl border border-border bg-surface p-5"
              >
                <Award className="text-accent" size={18} aria-hidden="true" />
                <h4 className="mt-3 font-semibold">{cert.title}</h4>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
