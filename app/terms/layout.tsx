import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | FADRA Store Policies",
  description: "Read FADRA's terms of service to understand our store policies, user agreements, and conditions of use for shopping on our platform.",
  keywords: ["terms of service", "terms and conditions", "store policies", "user agreement", "legal terms"],
  openGraph: {
    title: "Terms of Service - FADRA",
    description: "Understand our store policies and terms of use",
    url: "https://fadra-modest-store.vercel.app/terms",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
