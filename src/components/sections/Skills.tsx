import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiDocker,
  SiAnsible,
  SiGrafana,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiGit,
  SiGithubactions,
  SiJenkins,
} from "react-icons/si";
import { Activity, Award, Database } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const skillIcons: Record<string, IconType> = {
  AWS: FaAws,
  Docker: SiDocker,
  Ansible: SiAnsible,
  Grafana: SiGrafana,
  "Node.js": SiNodedotjs,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  "GitHub Actions": SiGithubactions,
  Jenkins: SiJenkins,
};

// Zabbix and certifications have no official icon set in react-icons, so fall back to a generic lucide icon.
const fallbackSkillIcons: Record<string, typeof Activity> = {
  Zabbix: Activity,
  "AWS Certified Cloud Practitioner": Award,
  SQLD: Database,
};

function SkillIcon({ skill }: Readonly<{ skill: string }>) {
  const Icon = skillIcons[skill] ?? fallbackSkillIcons[skill];
  if (!Icon) return null;
  return <Icon size={14} style={{ flexShrink: 0 }} />;
}

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
                <span
                  key={skill}
                  style={{
                    fontSize: 14,
                    color: "var(--muted-dark)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <SkillIcon skill={skill} />
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
