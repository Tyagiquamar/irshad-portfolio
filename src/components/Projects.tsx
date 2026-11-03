'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ExternalLink, X } from 'lucide-react';
import { FiGithub as Github } from 'react-icons/fi';
import { portfolioData, type Project } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

function ProjectGallery({ project }: { project: Project }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const images = project.images;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (images.length === 0) {
    return (
      <div className="flex min-h-[240px] items-center justify-center border border-dashed border-border bg-elevated px-6 text-sm text-muted">
        Source and technical write-up live on GitHub. No product screenshots for
        this project.
      </div>
    );
  }

  const current = images[active] ?? images[0];

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden border border-border bg-elevated"
        aria-label={`Open screenshot: ${current.alt}`}
      >
        {current.src.endsWith('.svg') ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={current.src}
            alt={current.alt}
            className="h-auto w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <Image
            src={current.src}
            alt={current.alt}
            width={1440}
            height={860}
            className="h-auto w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 720px"
          />
        )}
      </button>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(index)}
              className={`overflow-hidden rounded-lg border ${
                index === active ? 'border-accent' : 'border-border'
              }`}
              aria-label={`Show ${image.alt}`}
              aria-pressed={index === active}
            >
              <Image
                src={image.src}
                alt=""
                width={280}
                height={168}
                className="h-14 w-full object-cover object-top sm:h-16"
              />
            </button>
          ))}
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-white/20 p-2 text-white"
            onClick={() => setOpen(false)}
            aria-label="Close screenshot"
          >
            <X size={18} />
          </button>
          {current.src.endsWith('.svg') ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[90vh] w-auto max-w-full rounded-xl object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <Image
              src={current.src}
              alt={current.alt}
              width={1600}
              height={1000}
              className="max-h-[90vh] w-auto max-w-full rounded-xl object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          )}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const showDemo = Boolean(project.demo);

  return (
    <article className="overflow-hidden border border-border bg-surface">
      <div className={`grid gap-0 ${project.featured ? 'lg:grid-cols-[1.08fr_0.92fr]' : ''}`}>
        <div className="p-4 sm:p-6">
          <ProjectGallery project={project} />
        </div>
        <div className="flex flex-col p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {project.kicker}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 text-muted">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="border border-border bg-elevated px-2.5 py-1 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
          <ul className="mt-5 space-y-2 text-sm text-muted">
            {project.challenges.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg"
            >
              <Github size={16} /> GitHub
            </a>
            {showDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium"
              >
                <ExternalLink size={16} /> Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const featured = portfolioData.projects.filter((project) => project.featured);
  const rest = portfolioData.projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="border-b border-border py-20 sm:py-24">
      <div
        ref={ref}
        className={`reveal-root mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div className="max-w-2xl">
          <p className="reveal font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Selected Engineering Work
          </p>
          <h2 className="reveal mt-3 font-display text-4xl sm:text-5xl">
            Projects
          </h2>
          <p className="reveal mt-3 text-muted">
            Case studies of the public systems above, with screenshots from the
            running products.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {featured.map((project, index) => (
            <div
              key={project.id}
              className="reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-8 grid gap-6">
            {rest.map((project) => (
              <div key={project.id} className="reveal">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
