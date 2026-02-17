import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men's Modest Fashion | Suits, Blazers & Accessories",
  description: "Explore men's modest fashion collection. Premium suits, blazers, shirts, accessories, and more. Modern designs with traditional values.",
  keywords: ["men's modest fashion", "islamic clothing men", "modest suits", "men's formal wear", "muslim fashion men", "modest menswear", "halal fashion"],
  openGraph: {
    title: "Men's Modest Fashion - FADRA",
    description: "Explore men's modest fashion collection",
    url: "https://fadra-modest-store.vercel.app/men",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/men",
  },
};

export default function MenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
