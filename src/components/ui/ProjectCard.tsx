import Image from "next/image";

interface ProjectCardProps {
  title: string;
  summary: string;
  techStack: string[];
  architectureDiagram: string;
  architectureImage?: string;
  architectureImageWidth?: number;
  architectureImageHeight?: number;
  githubUrl?: string;
  blogUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  summary,
  techStack,
  architectureDiagram,
  architectureImage,
  architectureImageWidth = 863,
  architectureImageHeight = 484,
  githubUrl,
  blogUrl,
  index,
}: Readonly<ProjectCardProps>) {
  const isEven = index % 2 === 0;

  return (
    <div
      style={{
        textAlign: "center",
        padding: "90px 24px",
        borderBottom: "1px solid var(--line)",
        background: isEven ? "#ffffff" : "var(--surface)",
      }}
    >
      <div style={{ fontSize: 14, color: "var(--muted)", fontWeight: 500, marginBottom: 10 }}>
        Major Project
      </div>
      <h3
        style={{
          fontSize: "clamp(28px, 4.5vw, 44px)",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          margin: "0 0 16px",
          color: "var(--ink)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 17,
          color: "var(--muted)",
          maxWidth: 520,
          margin: "0 auto 32px",
          lineHeight: 1.6,
          whiteSpace: "pre-line",
        }}
      >
        {summary}
      </p>
      {architectureImage ? (
        <div
          style={{
            maxWidth: 760,
            width: "100%",
            margin: "0 auto 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            border: "1px solid var(--line)",
            borderRadius: 12,
            padding: 32,
          }}
        >
          <Image
            src={architectureImage}
            alt={architectureDiagram}
            width={architectureImageWidth}
            height={architectureImageHeight}
            style={{ width: "100%", maxWidth: architectureImageWidth, height: "auto" }}
          />
        </div>
      ) : (
        <div
          className="ph-stripe"
          style={{
            maxWidth: 760,
            width: "100%",
            height: 340,
            margin: "0 auto 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "monospace",
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          {architectureDiagram}
        </div>
      )}
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          marginBottom: 18,
          flexWrap: "wrap",
        }}
      >
        {techStack.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: 12,
              color: "var(--muted)",
              background: "var(--surface)",
              padding: "5px 12px",
              borderRadius: 980,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 24, justifyContent: "center", fontSize: 14, fontWeight: 500 }}>
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="link-accent">
            코드 &rsaquo;
          </a>
        )}
        {blogUrl && (
          <a href={blogUrl} target="_blank" rel="noopener noreferrer" className="link-accent">
            블로그 &rsaquo;
          </a>
        )}
      </div>
    </div>
  );
}
