import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how Plushify uses cookies and how you can manage your preferences.",
}

export default function CookiesPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Cookie Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: March 9, 2026</p>
      </div>

      <p className="text-muted-foreground">
        This Cookie Policy explains how Plushify uses cookies and similar tracking technologies
        when you visit our website and use our service.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">1. What Are Cookies</h2>
      <p className="text-muted-foreground">
        Cookies are small text files placed on your device when you visit a website. They are
        widely used to make websites work, improve efficiency, and provide reporting information.
        Cookies can be &quot;session cookies&quot; (deleted when you close your browser) or
        &quot;persistent cookies&quot; (remain on your device until they expire or you delete them).
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">2. How We Use Cookies</h2>
      <p className="text-muted-foreground">Plushify uses cookies to:</p>
      <ul className="mt-3 space-y-2 text-muted-foreground">
        <li>Keep you signed in across page visits</li>
        <li>Remember your preferences (e.g. dark/light mode)</li>
        <li>Understand how visitors use the site so we can improve it</li>
        <li>Prevent fraudulent activity and enhance security</li>
        <li>Measure the effectiveness of our marketing campaigns</li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">3. Types of Cookies We Use</h2>

      <h3 className="mt-6 text-lg font-semibold text-foreground">Strictly Necessary Cookies</h3>
      <p className="text-muted-foreground">
        These cookies are essential for the service to function and cannot be disabled. They include
        session cookies for authentication, CSRF protection tokens, and security cookies.
      </p>

      <h3 className="mt-6 text-lg font-semibold text-foreground">Functional Cookies</h3>
      <p className="text-muted-foreground">
        These cookies remember choices you make to provide a more personalised experience. Examples
        include your colour theme preference and language setting. Disabling these may affect
        functionality.
      </p>

      <h3 className="mt-6 text-lg font-semibold text-foreground">Analytics Cookies</h3>
      <p className="text-muted-foreground">
        We use analytics tools (PostHog) to understand how visitors interact with Plushify. This
        data is aggregated and anonymised. Analytics cookies track pages visited, time spent, and
        features used — but not personally identifiable information.
      </p>

      <h3 className="mt-6 text-lg font-semibold text-foreground">Marketing Cookies</h3>
      <p className="text-muted-foreground">
        If you arrive at Plushify via a marketing campaign, a cookie may be set to attribute the
        visit to the correct channel. We do not use third-party advertising cookies for retargeting
        at this time.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">4. Managing Cookies</h2>
      <p className="text-muted-foreground">
        You can control and manage cookies in several ways:
      </p>
      <ul className="mt-3 space-y-2 text-muted-foreground">
        <li>
          <strong className="text-foreground">Browser settings</strong> — Most browsers allow you
          to block or delete cookies via their privacy settings. Refer to your browser&apos;s help
          documentation for instructions.
        </li>
        <li>
          <strong className="text-foreground">Cookie banner</strong> — When you first visit
          Plushify, you can accept or decline non-essential cookies via our cookie consent banner.
        </li>
        <li>
          <strong className="text-foreground">Opt-out tools</strong> — For analytics specifically,
          you can opt out using browser extensions like uBlock Origin or by enabling
          &quot;Do Not Track&quot; in your browser.
        </li>
      </ul>
      <p className="mt-4 text-muted-foreground">
        Please note that disabling strictly necessary cookies may prevent the site from functioning
        correctly, including the ability to sign in.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">5. Contact</h2>
      <p className="text-muted-foreground">
        If you have questions about our use of cookies, please contact us at privacy@plushify.app.
      </p>
    </>
  )
}
