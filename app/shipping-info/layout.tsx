import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Information | Delivery Options & Times",
  description: "Learn about FADRA's shipping options, delivery times, and costs. We offer worldwide shipping with express and standard options.",
  keywords: ["shipping", "delivery", "shipping cost", "delivery time", "international shipping", "express shipping", "standard shipping"],
  openGraph: {
    title: "Shipping Information - FADRA",
    description: "Learn about our shipping options, delivery times, and costs",
    url: "https://fadra-modest-store.vercel.app/shipping-info",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/shipping-info",
  },
};

export default function ShippingInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
