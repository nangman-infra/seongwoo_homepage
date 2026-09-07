import { portfolioData } from "@/data/portfolio";

export default function Statement() {
  const { quote, description } = portfolioData.statement;

  return (
    <section
      style={{
        background: "var(--ink)",
        color: "#ffffff",
        textAlign: "center",
        padding: "100px 24px",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(26px, 4vw, 40px)",
          fontWeight: 600,
          lineHeight: 1.3,
          maxWidth: 760,
          margin: "0 auto",
          whiteSpace: "pre-line",
        }}
      >
        {quote}
      </h2>
      <p style={{ color: "var(--muted-dark)", fontSize: 16, marginTop: 24 }}>{description}</p>
    </section>
  );
}
