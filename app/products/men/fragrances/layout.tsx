import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men's Fragrances | Premium Perfumes & Colognes",
  description: "Discover premium fragrances for men. Elegant and sophisticated perfumes and colognes that make a lasting impression.",
  keywords: ["men's fragrances", "men's perfumes", "colognes", "halal fragrances", "luxury perfumes men", "men's scents", "islamic perfumes"],
  openGraph: {
    title: "Men's Fragrances - FADRA",
    description: "Discover premium fragrances for men",
    url: "https://fadra-modest-store.vercel.app/products/men/fragrances",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products/men/fragrances",
  },
};

export default function MenFragrancesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
