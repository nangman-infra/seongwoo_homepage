"use client";

import { motion } from "framer-motion";
import { Cloud, Cog, Server } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const skillIcons = {
    "인프라 & 클라우드": Cloud,
    "CI/CD & 자동화": Cog,
    "백엔드 & 네트워킹": Server,
  };

  return (
    <section className="min-h-screen bg-white py-20 px-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <div className="inline-block mb-6">
            <h2 className="text-5xl md:text-6xl font-black text-black tracking-tight mb-2">
              Skill Stack
            </h2>
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            현대적인 클라우드 인프라를 구축하고 유지하기 위한 포괄적인 기술 도구들
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(portfolioData.skills).map(([category, skills], categoryIndex) => {
            const IconComponent = skillIcons[category as keyof typeof skillIcons];
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 w-full"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {category}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            끊임없는 학습
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            클라우드 환경은 빠르게 발전하고 있으며, 저는 새로운 기술, 모범 사례, 
            그리고 업계 표준을 따라가는 데 전념하고 있습니다. 현재 고급 쿠버네티스 패턴과 
            멀티 클라우드 전략을 탐구하고 있습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}