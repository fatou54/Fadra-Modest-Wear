import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authenticity Guarantee | 100% Genuine Products",
  description: "FADRA guarantees 100% authentic products. Learn about our authentication process and quality assurance to ensure you receive only genuine luxury items.",
  keywords: ["authenticity", "genuine products", "authentic luxury", "quality assurance", "verified products", "authentic fashion"],
  openGraph: {
    title: "Authenticity Guarantee - FADRA",
    description: "100% authentic products guaranteed",
    url: "https://fadra-modest-store.vercel.app/authenticity",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/authenticity",
  },
};

export default function AuthenticityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
