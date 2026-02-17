import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Your Data Protection",
  description: "Read FADRA's privacy policy to understand how we collect, use, and protect your personal information. Your privacy is important to us.",
  keywords: ["privacy policy", "data protection", "privacy", "personal information", "data security", "gdpr"],
  openGraph: {
    title: "Privacy Policy - FADRA",
    description: "Understand how we protect your personal information",
    url: "https://fadra-modest-store.vercel.app/privacy",
  },
  alternates: {
    canonical: "https://fadra-modest-store.vercel.app/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
