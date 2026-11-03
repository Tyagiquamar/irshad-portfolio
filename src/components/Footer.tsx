'use client';

import { portfolioData } from '@/data/portfolio';

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between lg:px-8">
        <div>
          <p className="font-display text-xl">Mohd Irshad</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Full-stack and Android developer. Java, Spring Boot, React, and
            competitive programming.
          </p>
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
            <li>
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fg"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-muted sm:px-6 lg:px-8">
          © {year} Mohd Irshad
        </p>
      </div>
    </footer>
  );
}
