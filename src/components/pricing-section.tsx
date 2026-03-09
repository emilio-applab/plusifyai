"use client";

import { useState } from "react";
import { PricingCard } from "@/components/pricing-card";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    tier: "Basic",
    price: 9,
    credits: 30,
    isPopular: false,
    ctaLabel: "Get Started",
    features: [
      "30 plushie generations per month",
      "HD downloads (2048×2048)",
      "All 4 styles (Classic, Kawaii, Chibi, Realistic)",
      "Email support",
      "30-day generation history",
    ],
  },
  {
    tier: "Pro",
    price: 19,
    credits: 100,
    isPopular: true,
    ctaLabel: "Start Free Trial",
    features: [
      "100 plushie generations per month",
      "HD downloads (2048×2048)",
      "All 4 styles + upcoming styles",
      "Priority processing (2× faster)",
      "90-day generation history",
      "API access",
      "Priority email support",
    ],
  },
  {
    tier: "Elite",
    price: 29,
    credits: 200,
    isPopular: false,
    ctaLabel: "Get Elite",
    features: [
      "200 plushie generations per month",
      "4K downloads (4096×4096)",
      "All styles including beta previews",
      "Priority processing (3× faster)",
      "Unlimited history",
      "Full API access",
      "Commercial licence",
      "Dedicated support",
    ],
  },
];

export function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <div className="space-y-10">
      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-3">
        <span
          className={cn(
            "text-sm font-medium",
            billing === "monthly" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          Monthly
        </span>
        <button
          role="switch"
          aria-checked={billing === "annual"}
          aria-label="Toggle billing period"
          onClick={() =>
            setBilling((b) => (b === "monthly" ? "annual" : "monthly"))
          }
          className={cn(
            "relative inline-flex h-6 w-11 items-center rounded-full border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring",
            billing === "annual"
              ? "bg-primary border-primary"
              : "bg-muted border-border"
          )}
        >
          <span
            className={cn(
              "inline-block h-4 w-4 rounded-full bg-white shadow transition-transform",
              billing === "annual" ? "translate-x-5" : "translate-x-0.5"
            )}
          />
        </button>
        <span
          className={cn(
            "text-sm font-medium",
            billing === "annual" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          Annual
          <span className="ml-1.5 text-xs font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">
            Save 20%
          </span>
        </span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
        {PLANS.map((plan) => (
          <PricingCard key={plan.tier} {...plan} />
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground">
        All plans include a 7-day free trial. No credit card required.
      </p>
    </div>
  );
}
