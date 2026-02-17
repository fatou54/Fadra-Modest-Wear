import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men's Shoes | Formal & Casual Footwear",
  description: "Shop quality shoes for men. From formal dress shoes to casual footwear, find the perfect pair to complete your modest fashion look.",
  keywords: ["men's shoes", "formal shoes men", "dress shoes", "casual shoes", "men's footwear", "leather shoes", "business shoes"],
  openGraph: {
    title: "Men's Shoes - FADRA",
    description: "Shop quality shoes for men",
    url: "https://fadra-modest-store.vercel.app/products/men/shoes",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products/men/shoes",
  },
};

export default function MenShoesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
