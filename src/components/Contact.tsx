'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';
import { portfolioData } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="border-t border-border bg-elevated/60 py-20 sm:py-24">
      <div
        ref={ref}
        className={`reveal-root mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <p className="reveal text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Contact
        </p>
        <h2 className="reveal mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Get in touch
        </h2>
        <p className="reveal mx-auto mt-3 max-w-xl text-lg text-muted">
          The fastest path is email. GitHub and LinkedIn are also current.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a
            href={`mailto:${portfolioData.email}`}
            className="reveal rounded-2xl border border-border bg-surface p-6"
          >
            <Mail className="mx-auto text-accent" />
            <h3 className="mt-3 font-semibold">Email</h3>
            <p className="mt-1 break-all text-sm text-accent">{portfolioData.email}</p>
          </a>
          <a
            href={`tel:${portfolioData.phone.replace(/\s/g, '')}`}
            className="reveal rounded-2xl border border-border bg-surface p-6"
          >
            <Phone className="mx-auto text-accent" />
            <h3 className="mt-3 font-semibold">Phone</h3>
            <p className="mt-1 text-sm text-accent">{portfolioData.phone}</p>
          </a>
          <div className="reveal rounded-2xl border border-border bg-surface p-6">
            <MapPin className="mx-auto text-accent" />
            <h3 className="mt-3 font-semibold">Location</h3>
            <p className="mt-1 text-sm text-muted">{portfolioData.location}</p>
          </div>
        </div>

        <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-semibold text-bg"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
