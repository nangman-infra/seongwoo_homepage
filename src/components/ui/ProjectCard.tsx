"use client";

import { motion } from "framer-motion";
import { ExternalLink, Network } from "lucide-react";

function GitHubBrandIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.48 2 2 6.58 2 12.22C2 16.73 4.87 20.55 8.84 21.9C9.34 21.99 9.52 21.68 9.52 21.42C9.52 21.19 9.51 20.43 9.5 19.42C6.73 20.04 6.14 18.2 6.14 18.2C5.68 16.99 5.03 16.66 5.03 16.66C4.12 16.02 5.1 16.03 5.1 16.03C6.11 16.1 6.65 17.09 6.65 17.09C7.55 18.68 9.02 18.22 9.59 17.95C9.68 17.29 9.94 16.84 10.23 16.58C8.02 16.32 5.7 15.45 5.7 11.55C5.7 10.44 6.09 9.53 6.73 8.81C6.62 8.55 6.28 7.49 6.83 6.06C6.83 6.06 7.67 5.79 9.49 7.06C10.29 6.83 11.15 6.72 12 6.72C12.85 6.72 13.71 6.83 14.51 7.06C16.33 5.79 17.17 6.06 17.17 6.06C17.72 7.49 17.38 8.55 17.27 8.81C17.91 9.53 18.3 10.44 18.3 11.55C18.3 15.46 15.98 16.31 13.76 16.57C14.13 16.9 14.46 17.55 14.46 18.56C14.46 20 14.45 21.12 14.45 21.42C14.45 21.68 14.63 22 15.14 21.9C19.11 20.55 22 16.73 22 12.22C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

interface ProjectCardProps {
  title: string;
  summary: string;
  techStack: string[];
  architectureDiagram: string;
  githubUrl: string;
  blogUrl: string;
  index: number;
}

export default function ProjectCard({
  title,
  summary,
  techStack,
  architectureDiagram,
  githubUrl,
  blogUrl,
  index,
}: Readonly<ProjectCardProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 w-full"
    >
      {/* Architecture Diagram Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-b border-gray-200">
        <div className="text-center text-gray-600">
          <Network size={48} className="mx-auto mb-3 text-blue-500" />
          <p className="font-medium text-sm">아키텍처 다이어그램</p>
          <p className="text-xs text-gray-500 mt-1 px-4">{architectureDiagram}</p>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="px-8 py-12 space-y-8" style={{ paddingLeft: '4px', paddingRight: '4px', paddingTop: '8px', paddingBottom: '8px' }}>
        <div style={{ marginLeft: '16px', marginRight: '16px' }}>
          <h3 className="text-xl font-bold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3" style={{ marginLeft: '16px', marginRight: '16px' }}>
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2" style={{ marginLeft: '16px', marginRight: '16px' }}>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
          >
            <GitHubBrandIcon className="w-4 h-4" />
            코드
          </a>
          <a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
          >
            <ExternalLink size={16} />
            블로그
          </a>
        </div>
      </div>
    </motion.div>
  );
}
