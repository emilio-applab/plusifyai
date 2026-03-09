"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, CreditCard, ImageIcon } from "lucide-react";
import { toast } from "sonner";
import { ImageUpload } from "@/components/image-upload";
import { PlushieCard } from "@/components/plushie-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import {
  MOCK_GALLERY_ITEMS,
  MOCK_USER_STATS,
  type PlushieStyle,
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const STYLES: PlushieStyle[] = ["Classic", "Kawaii", "Chibi", "Realistic"];

export default function DashboardPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [selectedStyle, setSelectedStyle] = useState<PlushieStyle>("Kawaii");

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login");
    }
  }, [isPending, session, router]);

  if (isPending || !session) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-muted-foreground">Loading…</p>
      </div>
    );
  }

  const handleGenerate = () =>
    toast.info("Generation coming soon — backend not connected yet.");

  return (
    <div className="container mx-auto px-4 py-10 space-y-10">
      {/* Page heading */}
      <div>
        <h1 className="text-3xl font-extrabold">
          Welcome back, {session.user.name?.split(" ")[0] ?? "there"} 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          Upload a photo and generate your next plushie.
        </p>
      </div>

      {/* ── Stats Bar ─────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center gap-4 p-5 rounded-2xl border bg-card">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <CreditCard className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Credits Remaining</p>
            <p className="text-2xl font-extrabold">
              {MOCK_USER_STATS.creditsRemaining}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-5 rounded-2xl border bg-card">
          <div className="w-10 h-10 rounded-xl bg-secondary/30 flex items-center justify-center shrink-0">
            <Sparkles className="h-5 w-5 text-secondary-foreground" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Total Generated</p>
            <p className="text-2xl font-extrabold">
              {MOCK_USER_STATS.totalGenerated}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-5 rounded-2xl border bg-card">
          <div className="w-10 h-10 rounded-xl bg-accent/50 flex items-center justify-center shrink-0">
            <span className="text-xl" aria-hidden="true">🧸</span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Current Plan</p>
            <p className="text-2xl font-extrabold">{MOCK_USER_STATS.plan}</p>
          </div>
        </div>
      </div>

      {/* ── Upload & Generate ────────────────────────────── */}
      <section aria-labelledby="generate-heading">
        <h2 id="generate-heading" className="text-xl font-bold mb-4">
          Generate a New Plushie
        </h2>
        <div className="rounded-2xl border bg-card p-6 space-y-6">
          <ImageUpload />

          {/* Style selector */}
          <div>
            <p className="text-sm font-semibold mb-3">Choose a Style</p>
            <div
              className="flex flex-wrap gap-2"
              role="radiogroup"
              aria-label="Plushie style"
            >
              {STYLES.map((style) => (
                <button
                  key={style}
                  role="radio"
                  aria-checked={selectedStyle === style}
                  onClick={() => setSelectedStyle(style)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold border transition-colors",
                    selectedStyle === style
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary/60"
                  )}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full px-8"
            onClick={handleGenerate}
          >
            <Sparkles className="h-4 w-4 mr-2" aria-hidden="true" />
            Generate Plushie
          </Button>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────── */}
      <section aria-labelledby="gallery-heading">
        <div className="flex items-center gap-3 mb-4">
          <h2 id="gallery-heading" className="text-xl font-bold">
            My Plushies
          </h2>
          <Badge variant="secondary">{MOCK_GALLERY_ITEMS.length}</Badge>
        </div>

        {MOCK_GALLERY_ITEMS.length === 0 ? (
          <div className="rounded-2xl border border-dashed p-16 text-center space-y-4">
            <ImageIcon
              className="h-12 w-12 mx-auto text-muted-foreground"
              aria-hidden="true"
            />
            <h3 className="font-semibold text-lg">No plushies yet</h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Generate your first plushie above and it will appear here.
            </p>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={handleGenerate}
            >
              Generate your first plushie
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {MOCK_GALLERY_ITEMS.map((item) => (
              <PlushieCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
