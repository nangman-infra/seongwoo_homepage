"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent block">
              {portfolioData.hero.tagline}
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide mt-4"
          >
            {portfolioData.hero.subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300"
        whileHover={{ y: -5 }}
        whileTap={{ y: 0 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-light tracking-widest uppercase">스크롤</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>

      {/* Accent elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-500 rounded-full opacity-60" />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-purple-500 rounded-full opacity-40" />
    </section>
  );
}