"use client";

import Link from "next/link";
import { Code2, Globe, ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const contactLinks = [
  {
    key: "contact.email" as const,
    icon: Mail,
    href: "mailto:carlosngva@outlook.com",
    label: "carlosngva@outlook.com",
    external: false,
  },
  {
    key: "contact.github" as const,
    icon: Code2,
    href: "https://github.com/carlosngv",
    label: "github.com/carlosngv",
    external: true,
  },
  {
    key: "contact.linkedin" as const,
    icon: Globe,
    href: "https://linkedin.com/in/carlosngv",
    label: "linkedin.com/in/carlosngv",
    external: true,
  },
];

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <SectionContainer id="contact" warm>
      <div className="max-w-xl">
        <AnimatedSection>
          <h2 className="text-section-heading mb-6" style={{ color: "var(--text-primary)" }}>
            {t("contact.heading")}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-body mb-10" style={{ color: "var(--text-secondary)" }}>
            {t("contact.intro")}
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {contactLinks.map(({ key, icon: Icon, href, label, external }, i) => (
            <AnimatedSection key={key} delay={0.05 * i + 0.15}>
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between group p-5 rounded-[16px] transition-shadow duration-200 hover:shadow-card-el"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  boxShadow: "var(--shadow-outline-ring)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full"
                    style={{ backgroundColor: "var(--bg-secondary)" }}
                  >
                    <Icon size={16} style={{ color: "var(--text-muted)" }} />
                  </div>
                  <div>
                    <p className="text-caption mb-0.5" style={{ color: "var(--text-muted)" }}>
                      {t(key)}
                    </p>
                    <p className="text-body-ui font-medium" style={{ color: "var(--text-primary)" }}>
                      {label}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "var(--text-muted)" }}
                />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
