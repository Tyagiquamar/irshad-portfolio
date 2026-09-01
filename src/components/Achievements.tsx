'use client';

import { Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

/** A link is only real if it exists and isn't a bare "#" placeholder. */
const hasLink = (url?: string) => Boolean(url && url !== '#');

export default function Achievements() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-white">
      <div
        ref={ref}
        className={`reveal-root max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Achievements
          </h2>
          <p
            className="reveal text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ transitionDelay: '70ms' }}
          >
            Certifications, competitive programming, and milestones that
            highlight my technical growth.
          </p>
        </div>

        {/* Milestones */}
        <div
          className="reveal bg-blue-50 border border-blue-200 rounded-xl p-6 sm:p-8"
          style={{ transitionDelay: '120ms' }}
        >
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {portfolioData.stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-2xl sm:text-3xl font-bold text-blue-600">
                  {stat.value}
                </dd>
                <dt className="text-gray-700 font-medium text-sm sm:text-base mt-1">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Coding & Problem Solving */}
        <div className="mt-12 sm:mt-16">
          <h3 className="reveal text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Coding &amp; Problem Solving
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {portfolioData.achievements.map((item, index) => (
              <div
                key={item.platform}
                className="reveal"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="h-full flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md">
                  <div
                    className="text-3xl mb-4 leading-none"
                    aria-hidden="true"
                  >
                    {item.badge}
                  </div>
                  <h4 className="font-bold text-gray-900 break-words">
                    {item.platform}
                  </h4>
                  <p className="text-2xl font-bold text-blue-600 mt-1">
                    {item.rating}
                  </p>
                  <p className="text-gray-600 text-sm font-medium">{item.rank}</p>
                  {hasLink(item.link) && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.platform} profile (opens in a new tab)`}
                      className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
                    >
                      View Profile
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 sm:mt-16">
          <h3 className="reveal text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {portfolioData.certificates.map((cert, index) => (
              <div
                key={cert.title}
                className="reveal"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="h-full flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md">
                  <span className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                    <Award size={20} aria-hidden="true" />
                  </span>
                  <h4 className="font-bold text-gray-900 break-words">
                    {cert.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">{cert.issuer}</p>
                  {hasLink(cert.link) && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${cert.title} credential (opens in a new tab)`}
                      className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
                    >
                      View Credential
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
