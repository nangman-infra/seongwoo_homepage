"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section className="min-h-screen bg-white py-20 px-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-block">
              <h2 className="text-5xl md:text-6xl font-black text-black tracking-tight mb-2">
                {portfolioData.about.title}
              </h2>
              <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              {portfolioData.about.story}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
            >
              {["클라우드", "ROS", "네트워크", "운영체제", "시스템 프로그래밍"].map((keyword, index) => (
                <span
                  key={keyword}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/selfi.jpg" 
                  alt="프로필 이미지" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}