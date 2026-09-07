import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      style={{ background: "var(--ink)", color: "#ffffff", padding: "90px 24px", textAlign: "center" }}
    >
      <h3 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 48px" }}>Skill Stack</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 40,
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        {Object.entries(portfolioData.skills).map(([category, skills]) => (
          <div key={category}>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 16, color: "var(--surface)" }}>
              {category}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {skills.map((skill) => (
                <span key={skill} style={{ fontSize: 14, color: "var(--muted-dark)" }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
