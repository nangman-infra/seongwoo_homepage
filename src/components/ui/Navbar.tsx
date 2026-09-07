import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        padding: "22px 40px",
        borderBottom: "1px solid var(--line)",
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(8px)",
        fontSize: 13,
        color: "var(--muted)",
        letterSpacing: "0.02em",
        flexWrap: "wrap",
      }}
    >
      <span style={{ fontWeight: 600, color: "var(--ink)" }}>{portfolioData.nav.brand}</span>
      <a href="#about" className="link-muted">
        About
      </a>
      <a href="#projects" className="link-muted">
        Projects
      </a>
      <a href="#skills" className="link-muted">
        Skills
      </a>
      <Link href="/blog" className="link-muted">
        Blog
      </Link>
      <a href={`mailto:${portfolioData.contact.email}`} className="link-muted">
        Contact
      </a>
    </nav>
  );
}
