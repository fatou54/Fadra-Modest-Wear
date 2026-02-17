import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men's Accessories | Ties, Belts & More",
  description: "Shop premium accessories for men. Complete your look with elegant ties, belts, cufflinks, and other essential accessories.",
  keywords: ["men's accessories", "ties", "belts", "cufflinks", "pocket squares", "men's fashion accessories", "formal accessories"],
  openGraph: {
    title: "Men's Accessories - FADRA",
    description: "Shop premium accessories for men",
    url: "https://fadra-modest-store.vercel.app/products/men/accessories",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products/men/accessories",
  },
};

export default function MenAccessoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
