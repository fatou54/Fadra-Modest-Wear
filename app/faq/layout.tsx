import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions",
  description: "Find answers to common questions about ordering, shipping, returns, sizing, and more. Get quick help with your FADRA shopping experience.",
  keywords: ["faq", "frequently asked questions", "help", "customer service", "shipping questions", "return policy", "sizing help"],
  openGraph: {
    title: "FAQ - FADRA",
    description: "Find answers to common questions about ordering, shipping, returns, and more",
    url: "https://fadra-modest-store.vercel.app/faq",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
