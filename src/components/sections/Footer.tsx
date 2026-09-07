import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { github, linkedin, email } = portfolioData.contact;

  return (
    <footer style={{ padding: "60px 24px", textAlign: "center" }}>
      <div style={{ display: "flex", gap: 28, justifyContent: "center", fontSize: 14, flexWrap: "wrap" }}>
        <a href={github} target="_blank" rel="noopener noreferrer" className="link-muted">
          GitHub
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="link-muted">
          LinkedIn
        </a>
        <a href={`mailto:${email}`} className="link-muted">
          Email
        </a>
      </div>
      <div style={{ fontSize: 12, color: "#c2c2c4", marginTop: 14 }}>
        © {new Date().getFullYear()} {portfolioData.nav.brand}
      </div>
    </footer>
  );
}
