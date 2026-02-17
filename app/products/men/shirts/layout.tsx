import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men's Modest Shirts | Premium Dress Shirts",
  description: "Discover premium quality shirts for men. Comfortable, stylish dress shirts perfect for both formal and casual occasions. Shop modest fashion for men.",
  keywords: ["men's shirts", "dress shirts", "formal shirts", "casual shirts", "modest clothing men", "men's fashion", "business shirts"],
  openGraph: {
    title: "Men's Modest Shirts - FADRA",
    description: "Discover premium quality shirts for men",
    url: "https://fadra-modest-store.vercel.app/products/men/shirts",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products/men/shirts",
  },
};

export default function MenShirtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
