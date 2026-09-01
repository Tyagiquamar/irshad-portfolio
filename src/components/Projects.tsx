'use client';

import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

type Project = (typeof portfolioData.projects)[number];

/** A link is only real if it exists and isn't a bare "#" placeholder. */
const hasLink = (url?: string) => Boolean(url && url !== '#');

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  // Only surface a Live Demo when it's a distinct, real URL — not a second
  // pointer at the same GitHub repo.
  const showDemo = hasLink(project.demo) && project.demo !== project.github;
  const highlights = project.highlights.slice(0, featured ? 4 : 3);

  return (
    <div
      className={`h-full flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md ${
        featured ? 'p-6 sm:p-8' : 'p-6'
      }`}
    >
      {featured && (
        <span className="self-start inline-flex items-center rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide px-2.5 py-1 mb-4">
          Featured
        </span>
      )}

      <h3
        className={`font-bold text-gray-900 break-words ${
          featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
        }`}
      >
        {project.title}
      </h3>

      <p className="text-gray-600 mt-2 leading-relaxed">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-2">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2.5 text-gray-700 text-sm">
            <span aria-hidden="true" className="text-blue-600 font-bold leading-5">
              &bull;
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors"
        >
          <Github size={18} aria-hidden="true" /> GitHub
        </a>
        {showDemo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo (opens in a new tab)`}
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors"
          >
            <ExternalLink size={18} aria-hidden="true" /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  // The Distributed Job Queue System (id 2) is the strongest piece for a
  // Software Engineer audience — distributed/async processing, queueing,
  // WebSockets, PostgreSQL, metrics and containerised deployment — so it
  // leads as the featured project.
  const featuredProject =
    portfolioData.projects.find((project) => project.id === 2) ??
    portfolioData.projects[0];
  const otherProjects = portfolioData.projects.filter(
    (project) => project.id !== featuredProject?.id
  );

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-50">
      <div
        ref={ref}
        className={`reveal-root max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Featured Projects
          </h2>
          <p
            className="reveal text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ transitionDelay: '70ms' }}
          >
            Selected projects demonstrating backend engineering, full-stack
            development, system design, and problem-solving.
          </p>
        </div>

        {featuredProject && (
          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            <ProjectCard project={featuredProject} featured />
          </div>
        )}

        {otherProjects.length > 0 && (
          <div
            className={`mt-6 sm:mt-8 grid gap-6 ${
              otherProjects.length > 1 ? 'md:grid-cols-2' : ''
            }`}
          >
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="reveal"
                style={{ transitionDelay: `${150 + index * 70}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 mb-5">Want to see more of my work?</p>
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile (opens in a new tab)"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors"
          >
            <Github size={20} aria-hidden="true" /> Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
