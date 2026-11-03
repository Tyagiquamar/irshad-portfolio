'use client';

import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';

const facts = [
  { label: 'Role', value: 'Software Engineer' },
  { label: 'Availability', value: 'Open to roles · Pune / Remote' },
  { label: 'Previous', value: 'Android Developer Intern · CodeAlpha' },
  { label: 'Focus', value: 'Java · Spring Boot · Durable systems' },
  { label: 'Open Source', value: 'Stepwise · Benchwright' },
  { label: 'Location', value: portfolioData.location },
];

export default function Hero() {
  return (
    <section id="home" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)] lg:px-8 lg:py-20">
        <div className="animate-fade">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Backend systems / {portfolioData.location} / Open to roles
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.8rem,7vw,5.2rem)] leading-[0.95] tracking-tight">
            {portfolioData.name}
          </h1>
          <p className="mt-4 text-lg text-fg">{portfolioData.subtitle}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            {portfolioData.about.short} Currently expanding that work into
            distributed execution and coding-agent evaluation at Handshake AI.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href="#experience" className="text-accent hover:underline">
              Experience
            </a>
            <a href="#open-source" className="text-accent hover:underline">
              Open Source
            </a>
            <a href="#projects" className="text-accent hover:underline">
              Projects
            </a>
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-fg"
            >
              GitHub
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-fg"
            >
              LinkedIn
            </a>
            <a href={`mailto:${portfolioData.email}`} className="text-muted hover:text-fg">
              Email
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {portfolioData.stats.map((stat) => (
              <div key={stat.label} className="border-t border-border pt-3">
                <dd className="font-display text-2xl text-accent">{stat.value}</dd>
                <dt className="mt-1 text-xs text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <aside className="animate-fade space-y-8 [animation-delay:80ms]">
          <Image
            src={portfolioData.profileImage}
            alt={`${portfolioData.name}, software engineer`}
            width={320}
            height={320}
            priority
            sizes="240px"
            className="h-40 w-40 rounded-md border border-border object-cover object-top"
          />
          <dl className="space-y-4 border-t border-border pt-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
