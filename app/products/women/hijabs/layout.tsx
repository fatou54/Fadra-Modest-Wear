import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Hijabs | Luxury Hijab Collection",
  description: "Discover premium quality hijabs in various colors and fabrics. Soft, breathable, and stylish hijabs for everyday wear and special occasions. Shop luxury hijabs online.",
  keywords: ["premium hijabs", "luxury hijabs", "buy hijabs online", "silk hijabs", "chiffon hijabs", "jersey hijabs", "hijab scarves", "muslim headscarves"],
  openGraph: {
    title: "Premium Hijabs - FADRA",
    description: "Discover premium quality hijabs in various colors and fabrics",
    url: "https://fadra-modest-store.vercel.app/products/women/hijabs",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products/women/hijabs",
  },
};

export default function HijabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
