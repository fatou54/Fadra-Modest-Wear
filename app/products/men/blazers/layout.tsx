import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men's Blazers | Smart Casual Jackets",
  description: "Shop stylish blazers for men. Premium quality blazers perfect for business casual and formal occasions. Modern designs with traditional modesty.",
  keywords: ["men's blazers", "casual blazers", "formal jackets", "business blazers", "men's formal wear", "modest fashion men"],
  openGraph: {
    title: "Men's Blazers - FADRA",
    description: "Shop stylish blazers for men",
    url: "https://fadra-modest-store.vercel.app/products/men/blazers",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/products/men/blazers",
  },
};

export default function MenBlazersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
