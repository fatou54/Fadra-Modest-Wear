import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | See What Our Customers Say",
  description: "Read authentic customer reviews about FADRA's luxury modest fashion. See what customers say about our abayas, hijabs, suits, and accessories.",
  keywords: ["customer reviews", "testimonials", "product reviews", "fadra reviews", "customer feedback", "ratings"],
  openGraph: {
    title: "Customer Reviews - FADRA",
    description: "Read authentic customer reviews about FADRA's luxury modest fashion",
    url: "https://fadra-modest-store.vercel.app/reviews",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/reviews",
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
