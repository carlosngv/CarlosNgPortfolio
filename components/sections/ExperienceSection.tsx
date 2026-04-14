"use client";

import { useLanguage } from "@/lib/i18n/context";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface ExperienceItem {
  company: string;
  role: string;
  roleEs: string;
  period: string;
  location: string;
  description: string;
  descriptionEs: string;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Fundación Genésis Empresarial",
    role: "AI Engineer",
    roleEs: "Ingeniero IA",
    period: "Jun 2025 — Present",
    location: "Guatemala",
    description:
      "Designed and deployed an AI-powered internal recruitment platform that analyzes candidate resumes using LLM models, providing HR analysts with actionable insights. Developed a digital signature platform with AI features including document summarization, a conversational AI agent, and document narration using cloned AI voices.",
    descriptionEs:
      "Desarrollé e implementé una plataforma interna de reclutamiento con IA que analiza CVs usando modelos LLM, proporcionando insights accionables a los analistas de RRHH. Desarrollé una plataforma de firma digital con funcionalidades de resumen de documentos con IA, un agente conversacional y narración de documentos con voz clonada por IA.",
    tags: ["LLMs", "Python", "Node.js", "React", "AI Agents"],
  },
  {
    company: "Banco de los Trabajadores",
    role: "Software Engineer",
    roleEs: "Analista y Desarrollador de Software",
    period: "Jan 2025 — Jun 2025",
    location: "Guatemala",
    description:
      "Migrated a legacy monolithic application to a modern architecture using React for the frontend and NestJS to integrate microservices in the backend. Translated Figma designs into reusable UI components, ensuring scalability and performance.",
    descriptionEs:
      "Migré una aplicación monolítica a arquitectura moderna usando React en el frontend y NestJS para integrar microservicios en el backend. Implementé diseños de Figma en componentes UI reutilizables asegurando escalabilidad y rendimiento.",
    tags: ["React", "NestJS", "Microservices", "Azure DevOps"],
  },
  {
    company: "Business Development Group S.A.",
    role: "Software Engineer",
    roleEs: "Analista Programador",
    period: "Jun 2021 — Jun 2025",
    location: "Guatemala",
    description:
      "Contributed to migrating legacy systems to modern architectures using React, MicroFrontends, and NestJS. Developed RPA solutions with Automation Anywhere, automating complex processes and improving operational efficiency. Collaborated in agile teams using Scrum and Kanban.",
    descriptionEs:
      "Contribuí en la migración de sistemas heredados a arquitecturas modernas con React, MicroFrontends y NestJS. Desarrollé soluciones RPA con Automation Anywhere, automatizando procesos complejos. Colaboré en equipos ágiles con Scrum y Kanban.",
    tags: ["React", "NestJS", "MicroFrontends", "Automation Anywhere", "JavaScript"],
  },
  {
    company: "Banco Promerica de Guatemala",
    role: "RPA Developer",
    roleEs: "Desarrollador RPA",
    period: "Aug 2021 — Jan 2025",
    location: "Guatemala",
    description:
      "Designed and implemented end-to-end RPA solutions using Automation Anywhere, automating repetitive banking and administrative processes. Developed automation scripts with JavaScript to enhance bot logic and documented workflows for auditing and maintenance.",
    descriptionEs:
      "Diseñé e implementé soluciones RPA de extremo a extremo con Automation Anywhere, automatizando procesos bancarios y administrativos. Desarrollé scripts de automatización con JavaScript para ampliar la lógica de los bots y documenté flujos de trabajo para auditoría.",
    tags: ["Automation Anywhere", "JavaScript", "RPA", "Scrum", "Jira"],
  },
];

export function ExperienceSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionContainer id="experience">
      <AnimatedSection>
        <h2 className="text-section-heading mb-16" style={{ color: "var(--text-primary)" }}>
          {t("experience.heading")}
        </h2>
      </AnimatedSection>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-0 top-2 bottom-2 w-px"
          style={{ backgroundColor: "var(--border-default)" }}
        />

        <div className="space-y-14">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={0.1 * i}>
              <div className="pl-8 relative">
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full -translate-x-[4.75px]"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "2px solid var(--text-muted)",
                  }}
                />

                {/* Period */}
                <p className="text-caption mb-2" style={{ color: "var(--text-muted)" }}>
                  {exp.period} · {exp.location}
                </p>

                {/* Company & Role */}
                <h3 className="text-card-heading mb-1" style={{ color: "var(--text-primary)" }}>
                  {exp.company}
                </h3>
                <p className="text-body-ui mb-4" style={{ color: "var(--text-secondary)" }}>
                  {lang === "es" ? exp.roleEs : exp.role}
                </p>

                {/* Description */}
                <p className="text-body mb-5" style={{ color: "var(--text-secondary)" }}>
                  {lang === "es" ? exp.descriptionEs : exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[13px] font-medium"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
