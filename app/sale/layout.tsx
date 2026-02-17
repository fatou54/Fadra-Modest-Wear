import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sale | Modest Fashion Deals & Discounts",
  description: "Shop amazing deals on luxury modest fashion. Save up to 50% on abayas, hijabs, dresses, suits, and accessories. Limited time offers on premium items.",
  keywords: ["modest fashion sale", "abayas on sale", "hijab deals", "discount modest fashion", "clearance", "fashion deals", "luxury sale"],
  openGraph: {
    title: "Sale - FADRA",
    description: "Shop amazing deals on luxury modest fashion",
    url: "https://fadra-modest-store.vercel.app/sale",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/sale",
  },
};

export default function SaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
