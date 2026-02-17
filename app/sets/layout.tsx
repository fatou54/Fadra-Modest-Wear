import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coordinated Sets | Matching Outfits & Ensembles",
  description: "Shop stylish coordinated sets and matching outfits. Complete looks that combine elegance and modesty. Perfect for any occasion.",
  keywords: ["coordinated sets", "matching outfits", "modest sets", "co-ord sets", "matching ensembles", "outfit sets", "modest fashion sets"],
  openGraph: {
    title: "Coordinated Sets - FADRA",
    description: "Shop stylish coordinated sets and matching outfits",
    url: "https://fadra-modest-store.vercel.app/sets",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/sets",
  },
};

export default function SetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
