"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center">
        <h3 className="text-3xl font-bold mb-4">
          Let's Build Something <span className="text-blue-400">Amazing</span>
        </h3>
        
        <p className="text-gray-300 text-lg mb-8 mx-auto text-center">
          Ready to discuss cloud architecture, DevOps strategies, or potential collaborations?
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>

          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-200"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors duration-200"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Cloud Portfolio. Built with Next.js & Tailwind CSS.
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}