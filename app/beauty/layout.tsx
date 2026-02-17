import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beauty Products | Premium Cosmetics & Skincare",
  description: "Discover premium beauty products and cosmetics. High-quality halal beauty essentials including makeup, skincare, and fragrances.",
  keywords: ["beauty products", "cosmetics", "halal beauty", "skincare", "makeup", "beauty essentials", "premium cosmetics", "halal makeup"],
  openGraph: {
    title: "Beauty Products - FADRA",
    description: "Discover premium beauty products and cosmetics",
    url: "https://fadra-modest-store.vercel.app/beauty",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/beauty",
  },
};

export default function BeautyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
