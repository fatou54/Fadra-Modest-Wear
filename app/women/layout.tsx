import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women's Modest Fashion | Luxury Clothing & Accessories",
  description: "Shop the finest women's modest fashion collection. Discover luxury abayas, hijabs, dresses, handbags, jewelry, and more. Premium quality, elegant designs.",
  keywords: ["women's modest fashion", "luxury abayas", "designer hijabs", "modest dresses", "islamic clothing women", "muslim fashion", "modest wear", "elegant clothing"],
  openGraph: {
    title: "Women's Modest Fashion - FADRA",
    description: "Shop the finest women's modest fashion collection",
    url: "https://fadra-modest-store.vercel.app/women",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/women",
  },
};

export default function WomenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
