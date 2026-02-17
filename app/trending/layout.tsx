import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trending Now | Best Selling Modest Fashion",
  description: "Shop trending modest fashion items. Discover our bestselling abayas, hijabs, suits, and accessories. See what's popular with our customers.",
  keywords: ["trending fashion", "bestsellers", "popular items", "trending modest fashion", "best selling abayas", "trending hijabs", "fashion trends"],
  openGraph: {
    title: "Trending Now - FADRA",
    description: "Shop trending modest fashion items",
    url: "https://fadra-modest-store.vercel.app/trending",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/trending",
  },
};

export default function TrendingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
