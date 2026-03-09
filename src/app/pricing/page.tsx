import { PricingSection } from "@/components/pricing-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Plushify. Choose the plan that fits your needs — from casual creators to professional studios.",
  openGraph: {
    title: "Plushify Pricing",
    description:
      "Simple, transparent pricing. Start free, upgrade any time.",
  },
};

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
          Simple Pricing
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Pick the Right Plan for You
        </h1>
        <p className="text-lg text-muted-foreground">
          Start free. Upgrade when you need more. Cancel any time — no hidden
          fees, no surprises.
        </p>
      </div>

      <PricingSection />
    </div>
  );
}
