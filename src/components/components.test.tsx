import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Footer from "@/components/sections/Footer";
import ProjectCard from "@/components/ui/ProjectCard";

describe("seongwoo components", () => {
  it("renders footer contact links", () => {
    render(<Footer />);

    expect(screen.getByText(/Let's Build Something/i)).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
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
    expect(screen.getByRole("link", { name: "코드" })).toBeInTheDocument();
  });
});
