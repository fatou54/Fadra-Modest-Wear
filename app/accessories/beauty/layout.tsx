import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beauty Products | Premium Cosmetics & Skincare",
  description: "Shop premium beauty products, cosmetics, and skincare. High-quality halal beauty essentials for the modest fashion conscious.",
  keywords: ["beauty products", "cosmetics", "skincare", "halal beauty", "makeup", "beauty essentials", "premium cosmetics", "modest beauty"],
  openGraph: {
    title: "Beauty Products - FADRA",
    description: "Shop premium beauty products, cosmetics, and skincare",
    url: "https://fadra-modest-store.vercel.app/accessories/beauty",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/accessories/beauty",
  },
};

export default function BeautyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
