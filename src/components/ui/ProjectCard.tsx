"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Network } from "lucide-react";

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
}: ProjectCardProps) {
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
      <div className="px-8 py-8 space-y-8" style={{ paddingLeft: '4px', paddingRight: '4px' }}>
        <div style={{ marginLeft: '16px', marginRight: '16px' }}>
          <h3 className="text-xl font-bold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2" style={{ marginLeft: '16px', marginRight: '16px' }}>
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
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
            <Github size={16} />
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