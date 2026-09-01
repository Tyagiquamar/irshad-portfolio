'use client';

import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600">Where I&apos;ve built, shipped, and learned</p>
        </div>

        <div className="relative border-l-2 border-blue-200 ml-3 space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline node */}
              <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-100" />

              <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-300">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-3">
                  <Briefcase size={14} />
                  {exp.position}
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{exp.company}</h3>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mt-2 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>

                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-blue-600 mt-1 shrink-0">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
