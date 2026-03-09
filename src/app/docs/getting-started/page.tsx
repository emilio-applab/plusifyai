import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "Learn what Plushify is, how to create your account, and generate your first AI plushie in minutes.",
};

export default function GettingStartedPage() {
  return (
    <>
      <h1>Getting Started with Plushify</h1>
      <p className="lead text-lg text-muted-foreground">
        Welcome! This guide walks you through everything you need to know to
        create your first AI-generated plushie.
      </p>

      {/* ── What is Plushify ── */}
      <h2>What is Plushify?</h2>
      <p>
        Plushify is an AI-powered web application that transforms any photo into
        a custom plushie illustration. Upload a picture of a person, pet, or
        group and our AI renders an adorable soft-toy version in seconds.
      </p>
      <p>
        Whether you want a fun gift idea, unique profile picture, or just
        something to make you smile, Plushify turns any portrait into a plushie
        — no art skills required.
      </p>

      {/* ── Creating an account ── */}
      <h2>Creating an Account</h2>
      <p>
        Getting started is free and takes under a minute:
      </p>
      <ol>
        <li>
          Click{" "}
          <Link href="/register" className="text-primary hover:underline">
            Sign Up
          </Link>{" "}
          in the top navigation.
        </li>
        <li>
          Enter your name, email address, and a password — or sign in with
          Google for instant access.
        </li>
        <li>
          Check your inbox for a verification email and click the confirmation
          link.
        </li>
        <li>
          You&apos;ll land on your{" "}
          <Link href="/dashboard" className="text-primary hover:underline">
            Dashboard
          </Link>
          , ready to generate your first plushie.
        </li>
      </ol>
      <p>
        New accounts start with <strong>10 free credits</strong> — no credit
        card required.
      </p>

      {/* ── Understanding credits ── */}
      <h2>Understanding Credits</h2>
      <p>
        Every plushie generation costs <strong>1 credit</strong>. Credits are
        tied to your subscription plan and reset at the start of each billing
        cycle.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Monthly Credits</th>
              <th>Rollover</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Free trial</td>
              <td>10 (one-time)</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Basic</td>
              <td>30</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>100</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Elite</td>
              <td>200</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        You can see your remaining credits at a glance in the stats bar at the
        top of your dashboard.
      </p>

      {/* ── Quick start ── */}
      <h2>Quick Start</h2>
      <p>
        Ready to make your first plushie? Here&apos;s the fast-track version:
      </p>
      <ol>
        <li>
          <strong>Open your dashboard</strong> and find the &ldquo;Generate a
          New Plushie&rdquo; section.
        </li>
        <li>
          <strong>Upload a photo</strong> — drag it onto the drop zone or click
          to browse. Clear, well-lit portraits give the best results.
        </li>
        <li>
          <strong>Choose a style</strong> — Classic, Kawaii, Chibi, or
          Realistic. Not sure? Start with Kawaii.
        </li>
        <li>
          <strong>Hit &ldquo;Generate Plushie&rdquo;</strong> — your result
          will appear in the gallery below within 30 seconds.
        </li>
        <li>
          <strong>Download or share</strong> your plushie straight from the
          gallery card.
        </li>
      </ol>
      <p>
        For detailed upload tips, see the{" "}
        <Link href="/docs/how-to-upload" className="text-primary hover:underline">
          How to Upload
        </Link>{" "}
        guide.
      </p>
    </>
  );
}
