import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Handbags | Designer Bags for Women",
  description: "Explore our collection of luxury handbags and designer bags. Premium leather bags, elegant clutches, and sophisticated totes for the modern woman.",
  keywords: ["luxury handbags", "designer bags", "leather handbags", "women's bags", "elegant bags", "clutch bags", "tote bags", "shoulder bags"],
  openGraph: {
    title: "Luxury Handbags - FADRA",
    description: "Explore our collection of luxury handbags and designer bags",
    url: "https://fadra-modest-store.vercel.app/products/women/handbags",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products/women/handbags",
  },
};

export default function HandbagsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
