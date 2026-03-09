import Link from "next/link";
import { Zap, Sparkles, Heart, Lock, Upload, Wand2, Download } from "lucide-react";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Plushify — Turn Anyone Into a Plushie" },
};

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Your Photo",
    description:
      "Drop in a clear photo of yourself, a friend, family member, or pet. JPG, PNG, and WEBP all work great.",
  },
  {
    step: "02",
    icon: Wand2,
    title: "Choose Your Style",
    description:
      "Pick from Classic, Kawaii, Chibi, or Realistic styles to give your plushie the perfect personality.",
  },
  {
    step: "03",
    icon: Download,
    title: "Download Your Plushie",
    description:
      "Your AI-generated plushie is ready in seconds. Download in HD and share or send straight to print.",
  },
];

const FEATURES = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "AI generation completes in under 30 seconds — no waiting around.",
  },
  {
    icon: Sparkles,
    title: "HD Quality",
    description:
      "Every plushie is delivered at full resolution, ready to print or share.",
  },
  {
    icon: Heart,
    title: "Pet Friendly",
    description:
      "Dogs, cats, rabbits — our AI handles all furry subjects beautifully.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your photos are processed securely and never used to train AI models.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 py-20 md:py-28 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
          <span>✨</span> AI-Powered Plushie Generator
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-primary via-primary/80 to-secondary bg-clip-text text-transparent leading-tight">
          Turn Anyone Into<br />a Plushie
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground">
          Upload a photo of yourself, a friend, or your pet and get a custom
          AI-generated plushie in seconds. No art skills required.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full px-8 text-base">
            <Link href="/register">Get Started Free</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 text-base"
          >
            <Link href="#features">See Features ↓</Link>
          </Button>
        </div>
        {/* Hero — real before/after demo */}
        <div className="max-w-2xl mx-auto mt-8 shadow-2xl rounded-2xl overflow-hidden">
          <BeforeAfterSlider
            beforeUrl="/example/before.webp"
            afterUrl="/example/after.webp"
            beforeAlt="Original photo before plushie transformation"
            afterAlt="AI-generated kawaii plushie output"
          />
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Three simple steps — from photo to plushie in under a minute.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {HOW_IT_WORKS.map(({ step, icon: Icon, title, description }) => (
              <div key={step} className="flex flex-col items-center text-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.slice(1)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Built for Everyone
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Everything you need to create the perfect plushie, every time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border bg-card hover:shadow-md transition-shadow space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-secondary p-12 text-center space-y-6 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Ready to Create Your Plushie?
            </h2>
            <p className="max-w-md mx-auto opacity-90">
              Join thousands of happy customers. Your first plushie is on us.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full px-10 text-base font-bold"
            >
              <Link href="/register">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
