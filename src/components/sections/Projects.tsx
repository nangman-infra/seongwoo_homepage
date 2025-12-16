"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4 flex items-center justify-center">
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
              Major Projects
            </h2>
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            다양한 프로젝트의 FE,BE,임베디드 환경을 직접 구축해보며, 
            시스템 가용성과 확장성에 대해 끊임없이 고민해왔습니다. 
            이러한 ‘서비스를 지탱하는 기술’에 대한 열정으로 
            이제는 클라우드 엔지니어로서의 전문성을 키우고자 합니다.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            더 많은 프로젝트를 보고 싶으신가요?
          </p>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            GitHub에서 모든 프로젝트 보기
          </a>
        </motion.div>
      </div>
    </section>
  );
}