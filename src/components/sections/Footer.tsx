"use client";

import { Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

function GitHubBrandIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.48 2 2 6.58 2 12.22C2 16.73 4.87 20.55 8.84 21.9C9.34 21.99 9.52 21.68 9.52 21.42C9.52 21.19 9.51 20.43 9.5 19.42C6.73 20.04 6.14 18.2 6.14 18.2C5.68 16.99 5.03 16.66 5.03 16.66C4.12 16.02 5.1 16.03 5.1 16.03C6.11 16.1 6.65 17.09 6.65 17.09C7.55 18.68 9.02 18.22 9.59 17.95C9.68 17.29 9.94 16.84 10.23 16.58C8.02 16.32 5.7 15.45 5.7 11.55C5.7 10.44 6.09 9.53 6.73 8.81C6.62 8.55 6.28 7.49 6.83 6.06C6.83 6.06 7.67 5.79 9.49 7.06C10.29 6.83 11.15 6.72 12 6.72C12.85 6.72 13.71 6.83 14.51 7.06C16.33 5.79 17.17 6.06 17.17 6.06C17.72 7.49 17.38 8.55 17.27 8.81C17.91 9.53 18.3 10.44 18.3 11.55C18.3 15.46 15.98 16.31 13.76 16.57C14.13 16.9 14.46 17.55 14.46 18.56C14.46 20 14.45 21.12 14.45 21.42C14.45 21.68 14.63 22 15.14 21.9C19.11 20.55 22 16.73 22 12.22C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInBrandIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3C4.17 3 3.5 3.72 3.5 4.67C3.5 5.6 4.15 6.33 5.2 6.33H5.22C6.33 6.33 7 5.6 7 4.67C6.98 3.72 6.33 3 5.25 3ZM20.5 13.14C20.5 9.74 18.69 8.17 16.28 8.17C14.33 8.17 13.46 9.24 12.97 9.99V8.5H9.59C9.64 9.49 9.59 19.5 9.59 19.5H12.97V13.36C12.97 13.03 12.99 12.7 13.09 12.47C13.34 11.82 13.91 11.14 14.88 11.14C16.15 11.14 16.66 12.11 16.66 13.53V19.5H20.03V13.14H20.5Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center">
        <h3 className="text-3xl font-bold mb-4">
          Let&apos;s Build Something <span className="text-blue-400">Amazing</span>
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
            <GitHubBrandIcon className="w-5 h-5" />
            <span>GitHub</span>
          </a>

          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-200"
          >
            <LinkedInBrandIcon className="w-5 h-5" />
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
