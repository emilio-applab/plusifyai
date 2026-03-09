import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Plushify — Turn Anyone Into a Plushie",
    template: "%s | Plushify",
  },
  description:
    "Upload a photo and get a custom AI-generated plushie in seconds. Turn yourself, friends, family, or pets into adorable plushie art.",
  keywords: [
    "plushie",
    "AI art",
    "custom plushie",
    "photo to plushie",
    "AI image generation",
    "kawaii",
    "chibi",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Plushify",
    title: "Plushify — Turn Anyone Into a Plushie",
    description:
      "Upload a photo and get a custom AI-generated plushie in seconds.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plushify — Turn Anyone Into a Plushie",
    description:
      "Upload a photo and get a custom AI-generated plushie in seconds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Plushify",
  description:
    "Upload a photo and get a custom AI-generated plushie in seconds.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "9",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
