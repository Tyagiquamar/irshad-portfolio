'use client';

import { portfolioData } from '@/data/portfolio';
import { Mail, ExternalLink } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: portfolioData.social.github,
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: portfolioData.social.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: `mailto:${portfolioData.email}`,
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Irshad
              </span>
            </h3>
            <p className="text-gray-400 mb-6">
              Full-stack developer & competitive programmer building high-performance systems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                    title={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-bold mb-6">Ready to Work Together?</h4>
            <p className="text-gray-400 mb-4">
              Let's discuss your project and how I can help you achieve your goals.
            </p>
            <a
              href={`mailto:${portfolioData.email}`}
              className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Send Email <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Mohd Irshad. All rights reserved.</p>
          <p>
            Designed & Built with <span className="text-red-500">❤️</span> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
