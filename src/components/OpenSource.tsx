'use client';

import { portfolioData } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function OpenSource() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="open-source" className="border-b border-border py-20 sm:py-24">
      <div
        ref={ref}
        className={`reveal-root mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <p className="reveal font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Selected Open Source
        </p>
        <h2 className="reveal mt-3 font-display text-4xl sm:text-5xl">
          Open Source
        </h2>
        <p className="reveal mt-3 max-w-2xl text-muted">
          Original public systems, not forks. Durable workflow execution,
          coding-agent evaluation, and a native commerce stack.
        </p>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {portfolioData.openSource.map((item) => (
            <a
              key={item.repo}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group grid gap-2 py-6 md:grid-cols-[1fr_auto] md:items-start"
            >
              <div>
                <h3 className="font-display text-2xl group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
              <p className="font-mono text-xs text-muted md:text-right">
                {item.repo}
                <br />
                {item.status} · {item.date}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
