'use client';

import { Layers, Puzzle, Server, Smartphone } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

const snapshot = [
  { label: 'Based in', value: portfolioData.location },
  { label: 'Education', value: portfolioData.education.degreeShort },
  { label: 'University', value: portfolioData.education.school },
  { label: 'CGPA', value: portfolioData.education.cgpa },
  { label: 'Focus', value: 'Backend · Workflows · Evaluation' },
  { label: 'Core stack', value: 'Java · Spring Boot · React' },
];

const work = [
  {
    title: 'Backend systems',
    icon: Server,
    description: 'Durable APIs, leases, retries, and tenant-scoped services in Java and Spring Boot.',
  },
  {
    title: 'Full-stack products',
    icon: Layers,
    description: 'React dashboards against authenticated REST and live event streams.',
  },
  {
    title: 'Android',
    icon: Smartphone,
    description: 'Native Android clients talking to containerized backends.',
  },
  {
    title: 'Problem solving',
    icon: Puzzle,
    description: '600+ DSA problems and contest ratings kept from the original portfolio.',
  },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="border-y border-border bg-elevated/60 py-20 sm:py-24">
      <div
        ref={ref}
        className={`reveal-root mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="reveal text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              About
            </p>
            <h2 className="reveal mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Building software that recovers.
            </h2>
            <div className="reveal mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {portfolioData.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="reveal rounded-3xl border border-border bg-surface p-6 lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Snapshot
            </h3>
            <dl className="mt-4 space-y-4">
              {snapshot.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs uppercase tracking-wider text-muted">{item.label}</dt>
                  <dd className="mt-1 text-sm font-semibold">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {work.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reveal rounded-2xl border border-border bg-surface p-5"
              >
                <Icon size={18} className="text-accent" aria-hidden="true" />
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
