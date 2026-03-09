import Link from "next/link";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  tier: string;
  price: number;
  credits: number;
  features: string[];
  isPopular?: boolean;
  ctaLabel: string;
}

export function PricingCard({
  tier,
  price,
  credits,
  features,
  isPopular = false,
  ctaLabel,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl border p-8 transition-shadow",
        isPopular
          ? "border-primary bg-primary/5 shadow-xl shadow-primary/10 scale-[1.02]"
          : "border-border bg-card hover:shadow-md"
      )}
    >
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full">
          Most Popular
        </Badge>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-extrabold mb-1">{tier}</h3>
        <div className="flex items-end gap-1 mb-2">
          <span className="text-4xl font-extrabold">${price}</span>
          <span className="text-muted-foreground mb-1">/mo</span>
        </div>
        <p className="text-sm text-muted-foreground">
          {credits} credits per month
        </p>
      </div>

      <ul className="space-y-3 flex-1 mb-8" aria-label={`${tier} plan features`}>
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check
              className="h-4 w-4 text-primary shrink-0 mt-0.5"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        asChild
        className={cn("w-full rounded-full", isPopular ? "" : "variant-outline")}
        variant={isPopular ? "default" : "outline"}
      >
        <Link href="/register">{ctaLabel}</Link>
      </Button>
    </div>
  );
}
