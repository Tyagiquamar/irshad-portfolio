'use client';

import { portfolioData } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div
        ref={ref}
        className={`reveal-root mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <p className="reveal font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Contact
        </p>
        <h2 className="reveal mt-3 font-display text-4xl sm:text-5xl">
          Reach out.
        </h2>
        <p className="reveal mt-4 max-w-xl text-muted">
          Open to full-stack and Android roles.
        </p>
        <div className="reveal mt-8 space-y-2 text-sm">
          <p>
            <a href={`mailto:${portfolioData.email}`} className="text-accent hover:underline">
              {portfolioData.email}
            </a>
          </p>
          <p>
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              github.com/siddiqueirshad
            </a>
          </p>
          <p>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              linkedin.com/in/mohdirshad1
            </a>
          </p>
          <p className="pt-4 text-muted">
            {portfolioData.location} · Open to remote / hybrid / onsite
          </p>
        </div>
      </div>
    </section>
  );
}
