interface TagBadgeProps {
  tag: string;
  small?: boolean;
}

export function TagBadge({ tag, small = false }: TagBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${
        small ? "px-2 py-0.5 text-[12px]" : "px-2.5 py-1 text-[13px]"
      }`}
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-muted)",
        border: "1px solid var(--border-subtle)",
      }}
    >
      {tag}
    </span>
  );
}
