import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All Products - FADRA Luxury Modest Fashion",
  description: "Browse our complete collection of luxury modest fashion. Premium abayas, hijabs, modest dresses, accessories, beauty products, and more for women and men.",
  keywords: "shop modest fashion, buy abayas online, luxury hijabs, modest dresses, islamic fashion store, modest clothing online",
  openGraph: {
    title: "Shop All Products - FADRA Luxury Modest Fashion",
    description: "Browse our complete collection of luxury modest fashion items",
    url: "https://fadra-modest-store.vercel.app/products",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
