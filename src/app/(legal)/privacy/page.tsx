import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Plushify collects, uses, and protects your personal data.",
}

export default function PrivacyPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: March 9, 2026</p>
      </div>

      <p className="text-muted-foreground">
        At Plushify, we take your privacy seriously. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you use our service.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">1. Data We Collect</h2>
      <p className="text-muted-foreground">We collect the following types of information:</p>
      <ul className="mt-3 space-y-2 text-muted-foreground">
        <li>
          <strong className="text-foreground">Account information</strong> — Name, email address,
          and password when you register.
        </li>
        <li>
          <strong className="text-foreground">Images you upload</strong> — Photos you provide for
          plushie generation. These are processed and stored temporarily.
        </li>
        <li>
          <strong className="text-foreground">Usage data</strong> — Pages visited, features used,
          generation history, and credit usage.
        </li>
        <li>
          <strong className="text-foreground">Device and browser data</strong> — IP address,
          browser type, operating system, and referring URLs for analytics and security.
        </li>
        <li>
          <strong className="text-foreground">Payment information</strong> — Handled securely by
          our payment processor; we never store raw card details.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">2. How We Use Your Data</h2>
      <p className="text-muted-foreground">We use the information we collect to:</p>
      <ul className="mt-3 space-y-2 text-muted-foreground">
        <li>Provide, operate, and improve the Plushify service</li>
        <li>Process image uploads and generate plushie outputs</li>
        <li>Manage your account, credits, and subscription</li>
        <li>Send transactional emails (account confirmation, password resets)</li>
        <li>Respond to support requests</li>
        <li>Detect and prevent fraudulent or abusive activity</li>
        <li>Comply with legal obligations</li>
      </ul>
      <p className="mt-4 text-muted-foreground">
        We do <strong className="text-foreground">not</strong> sell your personal data to third
        parties, and we do not use your images to train AI models without your explicit consent.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">3. Data Storage</h2>
      <p className="text-muted-foreground">
        Your data is stored on secure servers hosted in the European Union and United States.
        Uploaded images are retained for 30 days (Basic plan) or 90 days (Pro plan) before
        automatic deletion. You can delete your generated plushies at any time from the dashboard.
      </p>
      <p className="mt-4 text-muted-foreground">
        We implement industry-standard security measures including encryption in transit (TLS) and
        at rest, access controls, and regular security audits.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">4. Third-Party Services</h2>
      <p className="text-muted-foreground">We use the following third-party services:</p>
      <ul className="mt-3 space-y-2 text-muted-foreground">
        <li>
          <strong className="text-foreground">Stripe</strong> — Payment processing
        </li>
        <li>
          <strong className="text-foreground">Vercel</strong> — Hosting and infrastructure
        </li>
        <li>
          <strong className="text-foreground">AWS / Vercel Blob</strong> — File storage
        </li>
        <li>
          <strong className="text-foreground">PostHog</strong> — Product analytics (anonymised)
        </li>
      </ul>
      <p className="mt-4 text-muted-foreground">
        Each third-party service has its own privacy policy governing their use of your data.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">5. Your Rights</h2>
      <p className="text-muted-foreground">
        Depending on your location, you may have the following rights regarding your personal data:
      </p>
      <ul className="mt-3 space-y-2 text-muted-foreground">
        <li>
          <strong className="text-foreground">Access</strong> — Request a copy of the data we hold
          about you
        </li>
        <li>
          <strong className="text-foreground">Rectification</strong> — Correct inaccurate or
          incomplete data
        </li>
        <li>
          <strong className="text-foreground">Erasure</strong> — Request deletion of your account
          and associated data
        </li>
        <li>
          <strong className="text-foreground">Portability</strong> — Receive your data in a
          machine-readable format
        </li>
        <li>
          <strong className="text-foreground">Objection</strong> — Object to processing based on
          legitimate interests
        </li>
      </ul>
      <p className="mt-4 text-muted-foreground">
        To exercise any of these rights, please contact us at privacy@plushify.app.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">6. Contact</h2>
      <p className="text-muted-foreground">
        If you have questions or concerns about this Privacy Policy, please contact us:
      </p>
      <ul className="mt-3 space-y-1 text-muted-foreground">
        <li>Email: privacy@plushify.app</li>
        <li>Address: Plushify Inc., 123 Plushie Lane, San Francisco, CA 94105, USA</li>
      </ul>
    </>
  )
}
