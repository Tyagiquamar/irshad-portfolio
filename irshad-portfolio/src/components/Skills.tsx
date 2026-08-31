'use client';

import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: portfolioData.skills.languages,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Frontend',
      skills: portfolioData.skills.frontend,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Backend',
      skills: portfolioData.skills.backend,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Databases',
      skills: portfolioData.skills.databases,
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'DevOps & Tools',
      skills: portfolioData.skills.devops,
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Core Concepts',
      skills: portfolioData.skills.concepts,
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Languages, frameworks, and technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-6`}>
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-lg text-sm font-medium group-hover:border-blue-400 group-hover:bg-blue-50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Note */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <p className="text-gray-700 text-lg">
            Strong expertise in <span className="font-bold text-blue-600">Java, Spring Boot, React, TypeScript, and Android</span>. 
            Experienced with data structures, algorithms, system design, and cloud-native applications.
          </p>
        </div>
      </div>
    </section>
  );
}
