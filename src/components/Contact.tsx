'use client';

import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';
import { portfolioData } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Let&apos;s connect and build something amazing together</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <a
            href={`mailto:${portfolioData.email}`}
            className="flex flex-col items-center text-center gap-3 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
          >
            <div className="p-4 bg-blue-100 rounded-lg">
              <Mail className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Email</h3>
            <span className="text-blue-600 font-medium break-all">{portfolioData.email}</span>
          </a>

          <a
            href={`tel:${portfolioData.phone}`}
            className="flex flex-col items-center text-center gap-3 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
          >
            <div className="p-4 bg-blue-100 rounded-lg">
              <Phone className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Phone</h3>
            <span className="text-blue-600 font-medium">{portfolioData.phone}</span>
          </a>

          <div className="flex flex-col items-center text-center gap-3 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="p-4 bg-blue-100 rounded-lg">
              <MapPin className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Location</h3>
            <span className="text-gray-600 font-medium">{portfolioData.location}</span>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Connect</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href={portfolioData.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 border-2 border-gray-300 text-gray-900 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold"
            >
              <ExternalLink size={20} /> LeetCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
