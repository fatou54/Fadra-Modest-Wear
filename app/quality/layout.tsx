import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality & Craftsmanship | Premium Materials",
  description: "Discover FADRA's commitment to premium craftsmanship and quality. We curate only the finest fabrics and work with world-class designers.",
  keywords: ["quality", "craftsmanship", "premium materials", "luxury fabrics", "quality assurance", "handcrafted", "premium quality"],
  openGraph: {
    title: "Quality & Craftsmanship - FADRA",
    description: "Discover our commitment to premium craftsmanship and quality",
    url: "https://fadra-modest-store.vercel.app/quality",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/quality",
  },
};

export default function QualityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
