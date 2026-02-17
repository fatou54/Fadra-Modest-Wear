import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Size Guide | Find Your Perfect Fit",
  description: "Use FADRA's comprehensive size guide to find your perfect fit. Detailed measurements for abayas, dresses, suits, shoes, and accessories.",
  keywords: ["size guide", "sizing chart", "measurements", "find your size", "clothing sizes", "how to measure", "fit guide"],
  openGraph: {
    title: "Size Guide - FADRA",
    description: "Find your perfect fit with our comprehensive size guide",
    url: "https://fadra-modest-store.vercel.app/size-guide",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/size-guide",
  },
};

export default function SizeGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
