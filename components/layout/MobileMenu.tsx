"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/lib/i18n/context";
import type { TranslationKeys } from "@/lib/i18n/translations/en";

interface NavLink {
  href: string;
  key: TranslationKeys;
}

interface MobileMenuProps {
  links: readonly NavLink[];
  className?: string;
}

export function MobileMenu({ links, className }: MobileMenuProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${className ?? ""}`}
        style={{ color: "var(--text-muted)" }}
        aria-label="Open navigation menu"
      >
        <Menu size={18} />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-72"
        style={{
          backgroundColor: "var(--bg-primary)",
          borderLeft: "1px solid var(--border-default)",
        }}
      >
        <SheetHeader>
          <SheetTitle
            className="font-display text-left"
            style={{ color: "var(--text-primary)" }}
          >
            Carlos Ng
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-8">
          {links.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              onClick={() => setOpen(false)}
              className="text-nav-link py-3 px-2 rounded-lg transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              {t(key)}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
