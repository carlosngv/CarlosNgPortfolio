"use client";

import Link from "next/link";
import { ExternalLink, Code2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface Project {
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "AI Recruitment Platform",
    titleEs: "Plataforma de Reclutamiento con IA",
    description:
      "Internal platform that analyzes candidate resumes using LLM models, providing HR analysts with structured insights, skill match scores, and candidate rankings. Integrated with enterprise HR workflows at Fundación Genésis Empresarial.",
    descriptionEs:
      "Plataforma interna que analiza CVs de candidatos mediante modelos LLM, proporcionando a los analistas de RRHH insights estructurados, puntajes de coincidencia de habilidades y rankings de candidatos. Integrada con flujos de trabajo de RRHH empresariales en Fundación Genésis Empresarial.",
    tags: ["LLMs", "Python", "Node.js", "React", "AI Agents"],
    featured: true,
  },
  {
    title: "Digital Signature Platform",
    titleEs: "Plataforma de Firma Digital",
    description:
      "Enterprise document management system with AI capabilities: automated document summarization, a conversational AI agent for document Q&A, and document narration using cloned AI voices — all built on top of a robust digital signature workflow.",
    descriptionEs:
      "Sistema empresarial de gestión de documentos con capacidades de IA: resumen automático de documentos, agente conversacional de IA para preguntas sobre documentos y narración de documentos con voces clonadas por IA — construido sobre un flujo de firma digital robusto.",
    tags: ["Python", "React", "AI Agents", "Voice AI", "LLMs"],
    featured: true,
  },
  {
    title: "Banking System Modernization",
    titleEs: "Modernización de Sistema Bancario",
    description:
      "Migration of a legacy monolithic banking application to a microservices architecture using React and NestJS. Translated Figma designs into a reusable UI component library, improving scalability and developer experience at Banco de los Trabajadores.",
    descriptionEs:
      "Migración de una aplicación bancaria monolítica a una arquitectura de microservicios con React y NestJS. Traduje diseños de Figma en una biblioteca de componentes UI reutilizable, mejorando la escalabilidad y la experiencia del desarrollador en Banco de los Trabajadores.",
    tags: ["React", "NestJS", "Microservices", "TypeScript", "Azure DevOps"],
  },
  {
    title: "RPA Banking Automation Suite",
    titleEs: "Suite de Automatización RPA Bancaria",
    description:
      "End-to-end RPA solutions for banking and administrative processes using Automation Anywhere, automating repetitive workflows across multiple departments. Extended bot logic with custom JavaScript scripts and documented workflows for auditing.",
    descriptionEs:
      "Soluciones RPA de extremo a extremo para procesos bancarios y administrativos con Automation Anywhere, automatizando flujos de trabajo repetitivos en múltiples departamentos. Extendí la lógica de los bots con scripts JavaScript personalizados y documenté los flujos para auditoría.",
    tags: ["Automation Anywhere", "JavaScript", "RPA", "Scrum", "Jira"],
  },
  {
    title: "Geospatial AI Analytics Platform",
    titleEs: "Plataforma de Análisis Geoespacial con IA",
    description:
      "Developed an internal GIS platform for credit portfolio analysis, integrating geospatial data with AI to generate actionable insights. Features interactive map visualizations, customer clustering (DBSCAN), and historical behavior trend analysis. Includes an AI agent with natural language querying (RAG) that interprets spatial data and generates automated recommendations for strategic decision-making, territorial segmentation, and early risk detection.",
    descriptionEs:
      "Desarrollé una plataforma GIS interna orientada a análisis de cartera crediticia, integrando datos geoespaciales con inteligencia artificial para generar insights accionables. Permite visualizar información en mapas interactivos, agrupar clientes mediante clustering (DBSCAN) y analizar tendencias históricas de comportamiento. Incluye un agente de IA con consultas en lenguaje natural (RAG) que interpreta datos espaciales y genera recomendaciones automáticas para la toma de decisiones estratégicas, segmentación territorial y detección temprana de riesgos.",
    tags: ["Python", "GIS", "AI Agents", "RAG", "DBSCAN", "LLMs", "React", "PostgreSQL"],
    featured: true,
  },
  {
    title: "Portfolio & Blog",
    titleEs: "Portafolio & Blog",
    description:
      "This site — a personal portfolio and blog built with Next.js 16, Tailwind CSS v4, and Framer Motion. Features bilingual support (EN/ES), dark mode, and a clean design system inspired by ElevenLabs.",
    descriptionEs:
      "Este sitio — un portafolio personal y blog construido con Next.js 16, Tailwind CSS v4 y Framer Motion. Incluye soporte bilingüe (ES/EN), modo oscuro y un sistema de diseño inspirado en ElevenLabs.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    githubUrl: "https://github.com/carlosngv",
  },
];

export function ProjectsSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionContainer id="projects" warm>
      <AnimatedSection>
        <h2 className="text-section-heading mb-16" style={{ color: "var(--text-primary)" }}>
          {t("projects.heading")}
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={0.1 * i}>
            <article
              className="group flex flex-col h-full p-6 rounded-[20px] transition-shadow duration-300 hover:shadow-card-el"
              style={{
                backgroundColor: "var(--bg-primary)",
                boxShadow: "var(--shadow-outline-ring)",
              }}
            >
              {/* Title */}
              <h3 className="text-card-heading mb-3" style={{ color: "var(--text-primary)" }}>
                {lang === "es" ? project.titleEs : project.title}
              </h3>

              {/* Description */}
              <p
                className="text-body-ui flex-1 mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                {lang === "es" ? project.descriptionEs : project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[13px] font-medium"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-nav-link transition-opacity hover:opacity-60"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <ExternalLink size={14} />
                    {t("projects.cta")}
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-nav-link transition-opacity hover:opacity-60"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Code2 size={14} />
                    {t("projects.code")}
                  </Link>
                )}
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </SectionContainer>
  );
}
