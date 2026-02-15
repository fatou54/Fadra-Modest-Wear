import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All Products",
  description: "Browse our complete collection of luxury modest fashion. Premium abayas, hijabs, modest dresses, accessories, beauty products, and more for women and men.",
  keywords: ["shop modest fashion", "buy abayas online", "luxury hijabs", "modest dresses", "islamic fashion store", "muslim fashion online"],
  openGraph: {
    title: "Shop All Products - FADRA",
    description: "Browse our complete collection of luxury modest fashion",
    url: "https://fadra-modest-store.vercel.app/products",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
