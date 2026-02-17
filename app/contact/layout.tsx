import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with FADRA",
  description: "Contact FADRA customer service. We're here to help with your questions about our modest fashion products, orders, shipping, and more.",
  keywords: ["contact fadra", "customer service", "get in touch", "contact us", "customer support", "help"],
  openGraph: {
    title: "Contact Us - FADRA",
    description: "Contact FADRA customer service",
    url: "https://fadra-modest-store.vercel.app/contact",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
