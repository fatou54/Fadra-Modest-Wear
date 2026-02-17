import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Arrivals | Latest Modest Fashion Collection",
  description: "Discover the latest additions to our modest fashion collection. New abayas, hijabs, dresses, suits, and accessories. Shop fresh styles every week.",
  keywords: ["new arrivals", "latest fashion", "new modest fashion", "new abayas", "new hijabs", "fashion trends", "latest collection"],
  openGraph: {
    title: "New Arrivals - FADRA",
    description: "Discover the latest additions to our modest fashion collection",
    url: "https://fadra-modest-store.vercel.app/new-arrivals",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/new-arrivals",
  },
};

export default function NewArrivalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
