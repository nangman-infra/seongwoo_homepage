import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { title, story, tags, photo } = portfolioData.about;

  return (
    <section
      style={{ textAlign: "center", padding: "90px 24px", borderBottom: "1px solid var(--line)" }}
    >
      <div
        style={{
          width: 160,
          height: 160,
          borderRadius: "50%",
          margin: "0 auto 28px",
          overflow: "hidden",
        }}
      >
        <Image
          src={photo}
          alt="프로필 사진"
          width={160}
          height={160}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          priority
        />
      </div>
      <h3 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 14px", color: "var(--ink)" }}>
        {title}
      </h3>
      <p
        style={{
          fontSize: 17,
          color: "var(--muted)",
          maxWidth: 560,
          margin: "0 auto 24px",
          lineHeight: 1.7,
        }}
      >
        {story}
      </p>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 12,
              color: "var(--muted)",
              background: "var(--surface)",
              padding: "5px 12px",
              borderRadius: 980,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
