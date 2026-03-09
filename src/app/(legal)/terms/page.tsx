import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — Plushify",
  description: "Read the Plushify Terms of Service governing your use of the platform.",
}

export default function TermsPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: March 9, 2026</p>
      </div>

      <p className="text-muted-foreground">
        Please read these Terms of Service carefully before using Plushify. By accessing or using
        our service, you agree to be bound by these terms.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
      <p className="text-muted-foreground">
        By creating an account or using the Plushify service, you confirm that you are at least 13
        years of age and agree to these Terms of Service and our Privacy Policy. If you are using
        Plushify on behalf of an organisation, you represent that you have the authority to bind
        that organisation to these terms.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">2. Service Description</h2>
      <p className="text-muted-foreground">
        Plushify is an AI-powered image transformation service that converts photographs into
        plushie-style illustrations. The service is provided &quot;as is&quot; and output quality
        may vary depending on input image quality, lighting, and selected style. We do not guarantee
        any specific output result.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">3. User Accounts</h2>
      <p className="text-muted-foreground">You are responsible for:</p>
      <ul className="mt-3 space-y-2 text-muted-foreground">
        <li>Maintaining the confidentiality of your account credentials</li>
        <li>All activity that occurs under your account</li>
        <li>Notifying us immediately of any unauthorised access</li>
      </ul>
      <p className="mt-4 text-muted-foreground">
        We reserve the right to terminate accounts that violate these terms or engage in fraudulent
        activity.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">4. Acceptable Use</h2>
      <p className="text-muted-foreground">You agree not to use Plushify to:</p>
      <ul className="mt-3 space-y-2 text-muted-foreground">
        <li>Upload images you do not have the rights or permission to use</li>
        <li>Generate content that is illegal, offensive, or infringes on third-party rights</li>
        <li>Attempt to reverse engineer or scrape the service</li>
        <li>Use automated tools to generate images at scale without authorisation</li>
        <li>Impersonate any person, entity, or AI system</li>
        <li>Violate any applicable laws or regulations</li>
      </ul>
      <p className="mt-4 text-muted-foreground">
        We reserve the right to remove content or suspend accounts that violate these guidelines.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">5. Credits &amp; Payments</h2>
      <p className="text-muted-foreground">
        Plushify operates on a credit-based model. Credits are consumed each time you generate a
        plushie. Key points:
      </p>
      <ul className="mt-3 space-y-2 text-muted-foreground">
        <li>Credits are non-transferable and non-refundable unless required by law</li>
        <li>Unused credits expire at the end of each billing cycle</li>
        <li>Subscription fees are billed monthly or annually depending on your plan</li>
        <li>
          Price changes will be communicated at least 30 days in advance via email and in-app
          notification
        </li>
      </ul>
      <p className="mt-4 text-muted-foreground">
        Refund requests for unused credits may be considered at our discretion within 14 days of
        purchase.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">6. Intellectual Property</h2>
      <p className="text-muted-foreground">
        You retain ownership of the input images you upload. For generated plushie outputs:
      </p>
      <ul className="mt-3 space-y-2 text-muted-foreground">
        <li>
          <strong className="text-foreground">Basic &amp; Pro plans</strong> — Personal use only.
          You may not use outputs for commercial purposes.
        </li>
        <li>
          <strong className="text-foreground">Elite plan</strong> — Full commercial licence
          granted for outputs generated under your account.
        </li>
      </ul>
      <p className="mt-4 text-muted-foreground">
        Plushify retains no ownership over your generated outputs and will not use them without your
        consent.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">7. Termination</h2>
      <p className="text-muted-foreground">
        You may delete your account at any time via the profile settings page. Upon deletion, your
        data will be removed within 30 days, except where retention is required by law.
      </p>
      <p className="mt-4 text-muted-foreground">
        We may suspend or terminate your access immediately if you breach these terms or engage in
        activity harmful to other users or the platform.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">8. Disclaimer</h2>
      <p className="text-muted-foreground">
        Plushify is provided &quot;as is&quot; without warranties of any kind, express or implied.
        We do not guarantee uninterrupted access, error-free operation, or specific output results.
        To the maximum extent permitted by applicable law, Plushify shall not be liable for any
        indirect, incidental, special, or consequential damages arising from your use of the
        service.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-foreground">Contact</h2>
      <p className="text-muted-foreground">
        For questions about these terms, contact us at legal@plushify.app.
      </p>
    </>
  )
}
