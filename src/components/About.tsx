'use client';

import { useEffect, useRef, useState } from 'react';
import { Server, Layers, Smartphone, Puzzle } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

/** Toggles `is-visible` on the ref'd element once it scrolls into view. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return { ref, visible };
}

/** Subtle emphasis for scannable keywords — weight + ink, not colour. */
function K({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-gray-900">{children}</span>;
}

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const snapshot: { label: string; value: string }[] = [
    { label: 'Based in', value: portfolioData.location },
    { label: 'Education', value: portfolioData.education.degreeShort },
    { label: 'Core Focus', value: 'Backend • Full-Stack • Android' },
    { label: 'DSA', value: '600+ Problems Solved' },
    { label: 'LeetCode', value: 'Top 3% Globally' },
    { label: 'Core Stack', value: 'Java • Spring Boot • React • Android' },
  ];

  const whatIDo = [
    {
      title: 'Backend Engineering',
      icon: Server,
      description:
        'REST APIs and scalable backend services with Java and Spring Boot.',
    },
    {
      title: 'Full-Stack Development',
      icon: Layers,
      description: 'End-to-end web applications with React and Spring Boot.',
    },
    {
      title: 'Android Development',
      icon: Smartphone,
      description: 'Native Android apps with clean, maintainable architecture.',
    },
    {
      title: 'Problem Solving',
      icon: Puzzle,
      description: 'Strong DSA foundation, with 600+ problems solved.',
    },
  ];

  return (
    <section id="about" className="bg-gray-50 py-16 sm:py-20">
      <div
        ref={ref}
        className={`reveal-root mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        {/* About + Professional Snapshot — ~60/40 */}
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="min-w-0 lg:col-span-3">
            <div className="max-w-[680px]">
              <p className="reveal text-sm font-semibold uppercase tracking-wider text-blue-600">
                About Me
              </p>
              <h2
                className="reveal mt-2 text-[clamp(1.75rem,1rem+2.4vw,2.25rem)] font-bold leading-tight tracking-tight text-gray-900"
                style={{ transitionDelay: '50ms' }}
              >
                Building software that scales.
              </h2>

              <div
                className="reveal mt-5 space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg"
                style={{ transitionDelay: '90ms' }}
              >
                <p>
                  I&apos;m a Software Engineer focused on building scalable,
                  reliable, and maintainable applications using{' '}
                  <K>Java, Spring Boot, React, and Android</K>.
                </p>
                <p>
                  My experience spans backend, full-stack, and Android
                  development, with a strong foundation in data structures and
                  algorithms. I&apos;ve solved <K>600+ DSA problems</K> and rank
                  in the <K>top 3% on LeetCode</K>.
                </p>
                <p>
                  Currently, I&apos;m expanding my expertise in{' '}
                  <K>distributed systems</K>, <K>AI-powered applications</K>, and{' '}
                  <K>LLM evaluation</K>.
                </p>
              </div>

              <a
                href="#contact"
                className="reveal group mt-6 inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                style={{ transitionDelay: '130ms' }}
              >
                Let&apos;s build something
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          <div
            className="reveal min-w-0 max-w-2xl lg:col-span-2 lg:max-w-none"
            style={{ transitionDelay: '150ms' }}
          >
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="border-b border-gray-100 pb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Professional Snapshot
              </h3>
              <dl className="mt-4 space-y-3.5">
                {snapshot.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs font-medium uppercase tracking-wider text-gray-400">
                      {item.label}
                    </dt>
                    <dd className="mt-0.5 break-words text-sm font-semibold text-gray-900">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="mt-10 sm:mt-12">
          <h3 className="reveal text-xl font-bold text-gray-900 sm:text-2xl">
            What I Do
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {whatIDo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal min-w-0"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h4 className="mt-3 text-[15px] font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
