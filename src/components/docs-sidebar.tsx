"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DOC_SECTIONS = [
  {
    title: "Getting Started",
    links: [
      { label: "What is Plushify?", href: "/docs/getting-started" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "How to Upload", href: "/docs/how-to-upload" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/docs/faq" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = (
    <nav aria-label="Docs navigation">
      <ul className="space-y-6">
        {DOC_SECTIONS.map((section) => (
          <li key={section.title}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-3">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm transition-colors",
                        active
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Mobile toggle */}
      <div className="md:hidden border-b px-4 py-3 flex items-center justify-between">
        <span className="text-sm font-semibold">Docs</span>
        <Button
          variant="ghost"
          size="icon"
          aria-label={open ? "Close sidebar" : "Open sidebar"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-b px-4 py-4 bg-background">{nav}</div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:block w-60 shrink-0 border-r pr-6 py-6">
        {nav}
      </aside>
    </>
  );
}
