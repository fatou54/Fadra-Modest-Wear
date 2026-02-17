import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Bags | Designer Handbags & Accessories",
  description: "Shop luxury bags and designer handbags. Premium quality totes, crossbody bags, clutches, and more. Elegant bags for every occasion.",
  keywords: ["luxury bags", "designer handbags", "leather bags", "tote bags", "crossbody bags", "clutch bags", "women's bags", "elegant handbags"],
  openGraph: {
    title: "Luxury Bags - FADRA",
    description: "Shop luxury bags and designer handbags",
    url: "https://fadra-modest-store.vercel.app/accessories/bags",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/accessories/bags",
  },
};

export default function BagsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
