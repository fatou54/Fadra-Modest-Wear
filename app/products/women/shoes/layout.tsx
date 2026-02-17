import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women's Shoes | Elegant & Comfortable Footwear",
  description: "Shop stylish and comfortable shoes for women. From elegant flats to sophisticated heels, find the perfect footwear to complement your modest fashion.",
  keywords: ["women's shoes", "modest fashion shoes", "elegant flats", "comfortable heels", "formal shoes", "casual shoes", "ladies footwear"],
  openGraph: {
    title: "Women's Shoes - FADRA",
    description: "Shop stylish and comfortable shoes for women",
    url: "https://fadra-modest-store.vercel.app/products/women/shoes",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products/women/shoes",
  },
};

export default function WomenShoesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
