import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns & Exchanges | Easy 30-Day Policy",
  description: "FADRA offers a hassle-free 30-day return and exchange policy. Learn about our return process, conditions, and how to initiate a return.",
  keywords: ["returns", "exchanges", "return policy", "refund", "exchange policy", "30 day return", "money back guarantee"],
  openGraph: {
    title: "Returns & Exchanges - FADRA",
    description: "Easy 30-day return and exchange policy",
    url: "https://fadra-modest-store.vercel.app/returns-exchanges",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/returns-exchanges",
  },
};

export default function ReturnsExchangesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
