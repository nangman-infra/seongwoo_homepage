import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Footer from "@/components/sections/Footer";
import ProjectCard from "@/components/ui/ProjectCard";

describe("seongwoo components", () => {
  it("renders footer contact links", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: "GitHub" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "LinkedIn" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Email" })).toBeInTheDocument();
  });

  it("renders project card metadata", () => {
    render(
      <ProjectCard
        title="Project"
        summary="summary"
        techStack={["AWS", "Docker"]}
        architectureDiagram="diagram"
        githubUrl="https://github.com/example"
        blogUrl="https://blog.example.com"
        index={0}
      />
    );

    expect(screen.getByText("Project")).toBeInTheDocument();
    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /코드/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /블로그/ })).toBeInTheDocument();
  });
});
