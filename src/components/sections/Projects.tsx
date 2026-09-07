import { portfolioData } from "@/data/portfolio";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <div>
      {portfolioData.projects.map((project, index) => (
        <ProjectCard key={project.id} {...project} index={index} />
      ))}
    </div>
  );
}
