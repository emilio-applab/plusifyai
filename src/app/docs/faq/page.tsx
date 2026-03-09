import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Plushify — credits, supported animals, image quality, privacy, refunds, and more.",
};

const FAQS = [
  {
    question: "How do credits work?",
    answer:
      "Each plushie generation costs 1 credit. Credits are allocated monthly based on your plan and reset at the start of every billing cycle. Unused credits do not roll over to the following month.",
  },
  {
    question: "Do I need a credit card to sign up?",
    answer:
      "No. New accounts receive 10 free credits with no credit card required. You only need to add payment details when you decide to upgrade to a paid plan.",
  },
  {
    question: "What animals does Plushify support?",
    answer:
      "Our AI handles a wide range of animals including dogs, cats, rabbits, hamsters, birds, horses, and many more. Results are best with clear, close-up photos of a single animal. Exotic or very small animals may produce less accurate results.",
  },
  {
    question: "What resolution are the downloaded plushies?",
    answer:
      "Basic and Pro plan downloads are 2048 × 2048 pixels (2K). Elite plan downloads are 4096 × 4096 pixels (4K). All downloads are in PNG format with a transparent background option.",
  },
  {
    question: "How long does generation take?",
    answer:
      "Most plushies are ready within 30 seconds. Pro plan users benefit from priority processing, which is approximately 2× faster. Elite users get 3× faster processing. Generation time can vary slightly during peak hours.",
  },
  {
    question: "Are my photos stored after generation?",
    answer:
      "Your uploaded source photos are deleted from our servers within 24 hours of processing. Generated plushie images are stored in your gallery for the duration of your plan's history period (30 days for Basic, 90 days for Pro, unlimited for Elite).",
  },
  {
    question: "Are my photos used to train AI models?",
    answer:
      "No. Your photos are never used to train, fine-tune, or improve any AI model. We process your images solely to generate the plushie output, and source photos are deleted within 24 hours. See our Privacy Policy for full details.",
  },
  {
    question: "Can I use my plushies commercially?",
    answer:
      "Basic and Pro plan plushies are licensed for personal use only. The Elite plan includes a full commercial licence, allowing you to use generated plushies in merchandise, marketing materials, and digital products.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "We offer a 7-day money-back guarantee on all paid plans. If you're not satisfied, contact us within 7 days of your first payment and we'll issue a full refund — no questions asked. Credits consumed before a refund request are non-refundable.",
  },
  {
    question: "What if my plushie doesn't look right?",
    answer:
      "Generation quality depends heavily on the input photo. If a plushie doesn't meet your expectations, try re-uploading with a clearer, better-lit photo. The generation does not cost an additional credit if you are regenerating within 5 minutes of the original attempt. For persistent issues, contact our support team.",
  },
];

export default function FaqPage() {
  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <p className="text-lg text-muted-foreground">
        Can&apos;t find what you&apos;re looking for? Check below or{" "}
        <Link href="/docs/getting-started" className="text-primary hover:underline">
          read the docs
        </Link>
        .
      </p>

      <div className="not-prose mt-8 space-y-3">
        {FAQS.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border bg-card overflow-hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold list-none hover:bg-muted/50 transition-colors">
              {faq.question}
              <span
                className="ml-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <div className="px-5 pb-5 pt-2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-primary/5 border border-primary/20 p-6">
        <h3 className="font-bold mb-2">Still have questions?</h3>
        <p className="text-sm text-muted-foreground">
          Our support team is available Monday–Friday, 9 am–6 pm UTC. Reach us
          at{" "}
          <a
            href="mailto:support@plushify.app"
            className="text-primary hover:underline"
          >
            support@plushify.app
          </a>
          .
        </p>
      </div>
    </>
  );
}
