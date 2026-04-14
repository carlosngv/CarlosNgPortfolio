import type { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  warm?: boolean;
}

export function SectionContainer({
  children,
  className = "",
  id,
  warm = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      style={{ backgroundColor: warm ? "var(--bg-warm)" : "var(--bg-primary)" }}
      className={`py-24 px-6 ${className}`}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}
