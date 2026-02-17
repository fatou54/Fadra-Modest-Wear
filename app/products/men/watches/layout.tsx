import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men's Watches | Luxury Timepieces",
  description: "Discover elegant watches for men. Classic and contemporary timepieces that combine style and functionality. Premium quality men's watches.",
  keywords: ["men's watches", "luxury watches", "elegant watches", "timepieces", "men's accessories", "dress watches", "formal watches"],
  openGraph: {
    title: "Men's Watches - FADRA",
    description: "Discover elegant watches for men",
    url: "https://fadra-modest-store.vercel.app/products/men/watches",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products/men/watches",
  },
};

export default function MenWatchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
