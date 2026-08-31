'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );
}

function useTypewriter(words: string[], typeMs = 90, deleteMs = 45, pauseMs = 1400) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (reduced) return;

    const current = words[index % words.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deleteMs : typeMs
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeMs, deleteMs, pauseMs, reduced]);

  return reduced ? words[0] : text;
}

const stats = [
  { number: '600+', label: 'DSA Problems Solved' },
  { number: 'Top 3%', label: 'LeetCode Global Rank' },
];

const heroRoles = ['Software Engineer', 'Backend Engineer', 'Full-Stack Developer'];

export default function Hero() {
  const typed = useTypewriter(heroRoles);

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 min-h-[calc(100svh-4rem)]"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — copy, achievements, CTAs */}
          <div className="animate-fadeIn">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-gray-600 shadow-sm backdrop-blur sm:text-sm">
              <span
                className="h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/15"
                aria-hidden="true"
              />
              Software Engineer
              <span className="text-gray-300" aria-hidden="true">
                |
              </span>
              Open to Opportunities
            </span>

            <h1 className="mt-5 font-bold tracking-tight text-gray-900">
              <span className="block text-2xl leading-tight sm:text-3xl">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Irshad.
                </span>
              </span>
              <span className="mt-2 block text-[clamp(1.9rem,5.2vw,3.15rem)] leading-[1.12]">
                Building <span className="text-blue-600">scalable software</span> and
                high-performance systems.
              </span>
            </h1>

            <p className="mt-4 text-base font-medium text-gray-500 sm:text-lg">
              I&apos;m a{' '}
              <span className="font-semibold text-blue-600">{typed}</span>
              <span
                className="type-cursor h-4 align-middle sm:h-5"
                aria-hidden="true"
              />
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Full-Stack Developer specializing in Spring Boot, React, and Android,
              with a strong foundation in data structures, algorithms, and
              competitive programming.
            </p>

            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
              {stats.map((s) => (
                <li key={s.label} className="flex items-baseline gap-1.5">
                  <span className="text-base font-bold text-gray-900">
                    {s.number}
                  </span>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#projects"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:w-auto"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-800 transition-all duration-200 hover:border-blue-600 hover:bg-white hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:w-auto"
              >
                Get In Touch
              </a>
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-lg border border-gray-200 bg-white/70 p-2.5 text-gray-600 transition-colors duration-200 hover:border-blue-300 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-lg border border-gray-200 bg-white/70 p-2.5 text-gray-600 transition-colors duration-200 hover:border-blue-300 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                aria-label="Send an email"
                className="rounded-lg border border-gray-200 bg-white/70 p-2.5 text-gray-600 transition-colors duration-200 hover:border-blue-300 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right — profile image + compact stat cards */}
          <div className="animate-rise flex flex-col items-center gap-6 [animation-delay:120ms] lg:gap-8">
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-full bg-blue-500/5 ring-1 ring-blue-100"
                aria-hidden="true"
              />
              <Image
                src={portfolioData.profileImage}
                alt={`${portfolioData.name}, Full-Stack Developer`}
                width={288}
                height={288}
                priority
                sizes="(max-width: 1024px) 224px, 256px"
                className="relative h-56 w-56 max-w-full rounded-full border-4 border-white object-cover object-top shadow-xl shadow-blue-950/5 ring-1 ring-gray-200/70 sm:h-60 sm:w-60 lg:h-64 lg:w-64"
              />
            </div>

            <div className="grid w-full max-w-xs grid-cols-2 gap-3 sm:max-w-sm sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-gray-200 bg-white/80 px-4 py-3.5 text-center backdrop-blur transition-all duration-200 hover:border-blue-300 hover:shadow-sm"
                >
                  <div className="text-2xl font-bold text-blue-600 sm:text-3xl">
                    {s.number}
                  </div>
                  <div className="mt-0.5 text-xs text-gray-600 sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
