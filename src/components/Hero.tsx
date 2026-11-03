'use client';

import Image from 'next/image';
import { ArrowRight, Mail } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden ambient">
      <div
        className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-60"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div className="animate-fade">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            {portfolioData.location} · Open to software engineering roles
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.4rem)] font-semibold leading-[1.05] tracking-tight">
            {portfolioData.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted sm:text-xl">
            Software engineer building durable backend systems, workflow
            orchestration, and coding-agent evaluation. Java, Spring Boot, React,
            and a competitive-programming core.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
            >
              View projects
              <ArrowRight size={16} />
            </a>
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-fg transition hover:border-accent/40"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted transition hover:text-fg"
            >
              Contact
            </a>
          </div>
          <div className="mt-8 flex gap-3">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-border p-2.5 text-muted hover:text-fg"
            >
              <Github size={18} />
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border p-2.5 text-muted hover:text-fg"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={portfolioData.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="rounded-full border border-border p-2.5 text-muted hover:text-fg"
            >
              <SiLeetcode size={18} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              aria-label="Email"
              className="rounded-full border border-border p-2.5 text-muted hover:text-fg"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="animate-fade flex justify-center [animation-delay:120ms] lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
            <Image
              src={portfolioData.profileImage}
              alt={`${portfolioData.name}, software engineer`}
              width={320}
              height={320}
              priority
              sizes="(max-width: 1024px) 240px, 288px"
              className="relative h-56 w-56 rounded-full border border-border object-cover object-top shadow-card sm:h-64 sm:w-64 lg:h-72 lg:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
