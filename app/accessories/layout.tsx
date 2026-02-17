import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fashion Accessories | Bags, Jewelry & Beauty",
  description: "Complete your modest fashion look with luxury accessories. Shop handbags, jewelry, beauty products, and more. Premium quality accessories.",
  keywords: ["fashion accessories", "luxury bags", "jewelry", "beauty products", "modest accessories", "designer accessories", "handbags", "fashion jewelry"],
  openGraph: {
    title: "Fashion Accessories - FADRA",
    description: "Complete your modest fashion look with luxury accessories",
    url: "https://fadra-modest-store.vercel.app/accessories",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/accessories",
  },
};

export default function AccessoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
