import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modest Dresses | Elegant Modest Fashion",
  description: "Shop elegant modest dresses for every occasion. Premium quality dresses that combine style, comfort and modesty. Perfect for formal events, everyday wear, and special occasions.",
  keywords: ["modest dresses", "elegant dresses", "modest fashion", "islamic dresses", "maxi dresses", "long dresses", "modest formal dresses", "muslim fashion"],
  openGraph: {
    title: "Modest Dresses - FADRA",
    description: "Shop elegant modest dresses for every occasion",
    url: "https://fadra-modest-store.vercel.app/products/women/dresses",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products/women/dresses",
  },
};

export default function DressesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
