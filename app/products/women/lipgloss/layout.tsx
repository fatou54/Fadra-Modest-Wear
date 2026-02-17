import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Lipgloss | Luxury Beauty Products",
  description: "Discover our collection of premium lipgloss and beauty products. High-quality, long-lasting lip colors in beautiful shades for every occasion.",
  keywords: ["premium lipgloss", "luxury lipgloss", "lip gloss", "beauty products", "makeup", "halal cosmetics", "lip color"],
  openGraph: {
    title: "Premium Lipgloss - FADRA",
    description: "Discover our collection of premium lipgloss and beauty products",
    url: "https://fadra-modest-store.vercel.app/products/women/lipgloss",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products/women/lipgloss",
  },
};

export default function LipglossLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
