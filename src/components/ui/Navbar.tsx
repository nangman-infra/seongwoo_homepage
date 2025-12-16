"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
      style={{ 
        borderRadius: isScrolled ? "0 0 0 12px" : "0",
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingLeft: '24px',
        paddingRight: '24px'
      }}
    >
      <div className="flex gap-6">
        <button
          onClick={() => scrollToSection("home")}
          className="text-white hover:text-blue-400 transition-colors text-sm font-medium"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="text-white hover:text-blue-400 transition-colors text-sm font-medium"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="text-white hover:text-blue-400 transition-colors text-sm font-medium"
        >
          Major Projects
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="text-white hover:text-blue-400 transition-colors text-sm font-medium"
        >
          Skill Stack
        </button>
        <Link
          href="/blog"
          className="text-white hover:text-blue-400 transition-colors text-sm font-medium"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
