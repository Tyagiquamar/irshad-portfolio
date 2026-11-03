'use client';

import { Mail } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';
import { portfolioData } from '@/data/portfolio';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold">
            Mohd <span className="text-accent">Irshad</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Software engineer. Durable systems, evaluation tooling, and
            competitive programming.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-border p-2 text-muted hover:text-fg"
            >
              <Github size={16} />
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border p-2 text-muted hover:text-fg"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              aria-label="Email"
              className="rounded-full border border-border p-2 text-muted hover:text-fg"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted sm:px-6 lg:px-8">
          © {year} Mohd Irshad. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
