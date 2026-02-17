import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Abayas | Premium Designer Abayas",
  description: "Discover our exquisite collection of luxury abayas. Premium designer abayas crafted with the finest fabrics for the modern, modest woman. Shop elegant and stylish abayas online.",
  keywords: ["luxury abayas", "designer abayas", "premium abayas", "buy abayas online", "elegant abayas", "modest fashion", "islamic fashion", "muslim women clothing"],
  openGraph: {
    title: "Luxury Abayas - FADRA",
    description: "Discover our exquisite collection of luxury abayas for the modern, modest woman",
    url: "https://fadra-modest-store.vercel.app/products/women/abayas",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products/women/abayas",
  },
};

export default function AbayasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
