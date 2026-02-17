import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fashion Jewelry | Elegant Accessories",
  description: "Discover beautiful fashion jewelry and elegant accessories. Necklaces, earrings, bracelets, and rings to complement your modest style.",
  keywords: ["fashion jewelry", "elegant jewelry", "accessories", "necklaces", "earrings", "bracelets", "rings", "modest jewelry"],
  openGraph: {
    title: "Fashion Jewelry - FADRA",
    description: "Discover beautiful fashion jewelry and elegant accessories",
    url: "https://fadra-modest-store.vercel.app/accessories/jewelry",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/accessories/jewelry",
  },
};

export default function JewelryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
