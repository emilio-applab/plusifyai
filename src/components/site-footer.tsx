import Link from "next/link";

const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
  ],
  docs: [
    { label: "Getting Started", href: "/docs/getting-started" },
    { label: "How to Upload", href: "/docs/how-to-upload" },
    { label: "FAQ", href: "/docs/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t bg-background" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3" aria-label="Plushify homepage">
              <span className="text-2xl" aria-hidden="true">🧸</span>
              <span className="text-lg font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Plushify
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Turn anyone into a plushie with the power of AI.
            </p>
            {/* Social placeholder links */}
            <div className="flex gap-4" aria-label="Social media links">
              <a
                href="#"
                aria-label="Follow us on Twitter / X"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                aria-label="Follow us on Instagram"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                aria-label="Follow us on TikTok"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Product column */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Docs column */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Docs</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.docs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Plushify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
