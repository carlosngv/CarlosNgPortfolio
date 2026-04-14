"use client";

import { useLanguage } from "@/lib/i18n/context";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Node.js",
  "NestJS",
  "Python",
  "Go",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Docker",
  "AWS",
  "Git",
  "RPA (Automation 360)",
  "UIPath",
  "LLMs / AI Agents",
  "Scrum / Agile",
];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <SectionContainer id="about" warm>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Text content */}
        <div>
          <AnimatedSection>
            <h2 className="text-section-heading mb-10" style={{ color: "var(--text-primary)" }}>
              {t("about.heading")}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-body mb-6" style={{ color: "var(--text-secondary)" }}>
              {t("about.bio.p1")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-body" style={{ color: "var(--text-secondary)" }}>
              {t("about.bio.p2")}
            </p>
          </AnimatedSection>
        </div>

        {/* Skills */}
        <div>
          <AnimatedSection delay={0.15}>
            <h3
              className="text-caption uppercase tracking-widest mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              {t("about.skills.heading")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <AnimatedSection key={skill} delay={0.05 * i} as="div">
                  <span
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-medium transition-shadow duration-200 hover:shadow-outline-ring"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border-default)",
                    }}
                  >
                    {skill}
                  </span>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </SectionContainer>
  );
}
