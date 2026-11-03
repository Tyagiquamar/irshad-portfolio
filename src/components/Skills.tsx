'use client';

import {
  SiAndroid,
  SiCplusplus,
  SiDocker,
  SiGit,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { portfolioData } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

const icons = [
  { name: 'Java', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Redis', icon: SiRedis },
  { name: 'Docker', icon: SiDocker },
  { name: 'Android', icon: SiAndroid },
  { name: 'Python', icon: SiPython },
  { name: 'C++', icon: SiCplusplus },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: SiGit },
];

const groups = [
  { title: 'Languages', items: portfolioData.skills.languages },
  { title: 'Frontend', items: portfolioData.skills.frontend },
  { title: 'Backend', items: portfolioData.skills.backend },
  { title: 'Data', items: portfolioData.skills.databases },
  { title: 'Tooling', items: portfolioData.skills.devops },
  { title: 'Foundations', items: portfolioData.skills.concepts },
];

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="border-y border-border bg-elevated/60 py-20 sm:py-24">
      <div
        ref={ref}
        className={`reveal-root mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <p className="reveal text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Stack
        </p>
        <h2 className="reveal mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Technical skills
        </h2>
        <p className="reveal mt-3 max-w-2xl text-lg text-muted">
          Confirmed from the existing portfolio and the two featured systems.
          No inflated cloud certifications or unused tools.
        </p>

        <div className="reveal mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-7">
          {icons.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface px-3 py-4 text-center"
            >
              <Icon className="text-xl text-accent" aria-hidden="true" />
              <span className="text-xs font-medium text-muted">{name}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <div
              key={group.title}
              className="reveal rounded-2xl border border-border bg-surface p-5"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-elevated px-3 py-1 text-sm text-fg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
