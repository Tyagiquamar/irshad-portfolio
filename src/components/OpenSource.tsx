'use client';

import { portfolioData } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function OpenSource() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { merged, verifiedOn } = portfolioData.openSourceStats;

  return (
    <section id="open-source" className="border-b border-border py-20 sm:py-24">
      <div
        ref={ref}
        className={`reveal-root mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <p className="reveal font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Selected Open Source Contributions
        </p>
        <h2 className="reveal mt-3 font-display text-4xl sm:text-5xl">
          Open Source
        </h2>
        <p className="reveal mt-3 max-w-2xl text-muted">
          {merged} merged pull requests, verified against GitHub on {verifiedOn}.
          The list below is selected merged code, not comment-typo PRs. Authored
          systems follow.
        </p>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {portfolioData.openSource.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group grid gap-2 py-6 md:grid-cols-[1fr_auto] md:items-start"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {item.repo}
                </p>
                <h3 className="mt-1 font-display text-2xl group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
              <p className="font-mono text-xs text-muted md:pt-5 md:text-right">
                PR #{item.pr} · {item.status} · {item.date}
              </p>
            </a>
          ))}
        </div>

        <h3 className="reveal mt-16 font-display text-3xl">Authored</h3>
        <p className="reveal mt-2 max-w-2xl text-sm text-muted">
          Original public repositories, not forks.
        </p>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {portfolioData.authoredRepos.map((item) => (
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
