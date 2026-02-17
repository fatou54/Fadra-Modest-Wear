import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men's Modest Suits | Modern Formal Wear",
  description: "Discover our collection of modern modest suits for men. Tailored suits blending tradition and contemporary style for professional and formal occasions.",
  keywords: ["men's suits", "modest suits", "formal wear men", "tailored suits", "business suits", "islamic fashion men", "professional attire"],
  openGraph: {
    title: "Men's Modest Suits - FADRA",
    description: "Discover our collection of modern modest suits for men",
    url: "https://fadra-modest-store.vercel.app/products/men/suits",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products/men/suits",
  },
};

export default function MenSuitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
