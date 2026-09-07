import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { eyebrow, title, description, primaryCta, secondaryCta, tertiaryCta } = portfolioData.hero;

  return (
    <section
      style={{
        textAlign: "center",
        padding: "120px 24px 100px",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div style={{ fontSize: 15, color: "var(--muted)", fontWeight: 500, marginBottom: 18 }}>
        {eyebrow}
      </div>
      <h1
        style={{
          fontSize: "clamp(36px, 7vw, 68px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1.08,
          margin: "0 auto",
          maxWidth: 820,
          color: "var(--ink)",
          whiteSpace: "pre-line",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: 19,
          color: "var(--muted)",
          maxWidth: 560,
          margin: "26px auto 36px",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        <a
          href={primaryCta.href}
          className="btn-primary"
          style={{ padding: "12px 26px", borderRadius: 980, fontSize: 15, fontWeight: 500 }}
        >
          {primaryCta.label}
        </a>
        <a
          href={secondaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent"
          style={{ padding: "12px 10px", fontSize: 15, fontWeight: 500 }}
        >
          {secondaryCta.label} &rsaquo;
        </a>
        <a
          href={tertiaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent"
          style={{ padding: "12px 10px", fontSize: 15, fontWeight: 500 }}
        >
          {tertiaryCta.label} &rsaquo;
        </a>
      </div>
    </section>
  );
}
