import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All Products - FADRA Luxury Modest Fashion",
  description: "Browse our complete collection of luxury modest fashion. Premium abayas, hijabs, modest dresses, accessories, beauty products, and more for women and men.",
  keywords: "shop modest fashion, buy abayas online, luxury hijabs, modest dresses",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
