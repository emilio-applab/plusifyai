import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Upload",
  description:
    "Learn how to upload photos to Plushify, supported formats, size limits, and tips for getting the best AI plushie results.",
};

export default function HowToUploadPage() {
  return (
    <>
      <h1>How to Upload a Photo</h1>
      <p className="text-lg text-muted-foreground">
        A great plushie starts with a great photo. This guide covers everything
        from supported formats to framing tips.
      </p>

      {/* ── Supported formats ── */}
      <h2>Supported Formats &amp; Size Limits</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Format</th>
              <th>Extension</th>
              <th>Max File Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JPEG</td>
              <td>.jpg, .jpeg</td>
              <td>10 MB</td>
            </tr>
            <tr>
              <td>PNG</td>
              <td>.png</td>
              <td>10 MB</td>
            </tr>
            <tr>
              <td>WebP</td>
              <td>.webp</td>
              <td>10 MB</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Images must be at least <strong>512 × 512 pixels</strong>. For the best
        results, use photos that are 1 MP or higher. Animated GIFs and HEIC
        files are not currently supported.
      </p>

      {/* ── Step by step ── */}
      <h2>Step-by-Step Upload Instructions</h2>
      <ol>
        <li>
          <strong>Go to your Dashboard.</strong> The upload zone is in the
          &ldquo;Generate a New Plushie&rdquo; section.
        </li>
        <li>
          <strong>Drag and drop</strong> your image onto the dashed drop zone,
          or click anywhere inside it to open the file browser.
        </li>
        <li>
          The file name appears in the drop zone once your file is selected —
          this confirms it was picked up correctly.
        </li>
        <li>
          <strong>Choose a style</strong> using the pill buttons below the
          upload zone (Classic, Kawaii, Chibi, Realistic).
        </li>
        <li>
          Click <strong>&ldquo;Generate Plushie&rdquo;</strong>. The AI begins
          processing immediately. You&apos;ll see the result in your gallery
          within 30 seconds.
        </li>
      </ol>

      {/* ── Tips ── */}
      <h2>Tips for Best Results</h2>

      <h3>Lighting</h3>
      <p>
        Use natural, even lighting whenever possible. Photos taken near a window
        in daylight produce the cleanest subject outlines. Avoid harsh shadows
        across the face or strong backlighting that silhouettes the subject.
      </p>

      <h3>Framing</h3>
      <p>
        Aim for a clear view of the subject&apos;s head and shoulders. The
        subject should fill at least half the frame — avoid long-distance shots
        where the subject appears tiny. Portraits and close-up shots work best.
      </p>

      <h3>Single Subject</h3>
      <p>
        For the clearest results, use a photo with one main subject (one person
        or one pet). The AI can handle groups, but individual portraits produce
        significantly more accurate and detailed plushies.
      </p>

      <h3>Background</h3>
      <p>
        A plain or softly blurred background helps the AI isolate the subject.
        Busy, cluttered backgrounds may affect the quality of the final
        plushie.
      </p>

      {/* ── Styles ── */}
      <h2>Style Options Explained</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {[
          {
            name: "Classic",
            desc: "A timeless, huggable stuffed-animal look with soft textures and rounded features. Great for all ages.",
          },
          {
            name: "Kawaii",
            desc: "Oversized head, large sparkly eyes, and pastel colouring — the quintessential cute Japanese aesthetic.",
          },
          {
            name: "Chibi",
            desc: "Super-deformed proportions with a tiny body and big head. Perfect for anime fans and gaming-themed gifts.",
          },
          {
            name: "Realistic",
            desc: "Highly detailed fur, fabric textures, and accurate colour matching for a photorealistic plushie feel.",
          },
        ].map((style) => (
          <div key={style.name} className="rounded-xl border p-4">
            <h4 className="font-bold text-sm mb-1">{style.name}</h4>
            <p className="text-sm text-muted-foreground">{style.desc}</p>
          </div>
        ))}
      </div>
      <p>
        Still have questions?{" "}
        <Link href="/docs/faq" className="text-primary hover:underline">
          Check the FAQ
        </Link>{" "}
        or reach out to our support team.
      </p>
    </>
  );
}
