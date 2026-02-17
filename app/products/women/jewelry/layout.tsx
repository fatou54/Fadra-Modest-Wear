import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elegant Jewelry | Modest Fashion Jewelry",
  description: "Discover elegant and modest jewelry pieces. Beautiful necklaces, earrings, bracelets, and rings that complement your modest style.",
  keywords: ["modest jewelry", "elegant jewelry", "women's jewelry", "islamic jewelry", "halal jewelry", "necklaces", "earrings", "bracelets"],
  openGraph: {
    title: "Elegant Jewelry - FADRA",
    description: "Discover elegant and modest jewelry pieces",
    url: "https://fadra-modest-store.vercel.app/products/women/jewelry",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products/women/jewelry",
  },
};

export default function JewelryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
