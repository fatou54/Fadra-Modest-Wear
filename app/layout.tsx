import "./globals.css";
import Navigation from "./components/Navigation";
import { CartProvider } from "@/lib/cartContext";

export const metadata = {
  title: "FADRA - Luxury Modest Fashion",
  description: "Curating the finest in luxury modest fashion for the modern world. Shop premium abayas, hijabs, modest dresses, and luxury accessories for women and men.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  keywords: "modest fashion, luxury abayas, hijabs, modest dresses, islamic fashion, modest clothing, women modest wear, men modest wear",
  authors: [{ name: "FADRA" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fadra-modest-store.vercel.app",
    siteName: "FADRA",
    title: "FADRA - Luxury Modest Fashion",
    description: "Curating the finest in luxury modest fashion for the modern world. Shop premium abayas, hijabs, modest dresses, and luxury accessories.",
    images: [
      {
        url: "https://fadra-modest-store.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FADRA Luxury Modest Fashion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FADRA - Luxury Modest Fashion",
    description: "Curating the finest in luxury modest fashion for the modern world",
    images: ["https://fadra-modest-store.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "FADRA",
    "description": "Luxury modest fashion store offering premium abayas, hijabs, modest dresses, and accessories",
    "url": "https://fadra-modest-store.vercel.app",
    "logo": "https://fadra-modest-store.vercel.app/logo.png",
    "sameAs": [
      "https://www.instagram.com/fadra",
      "https://www.facebook.com/fadra"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://fadra-modest-store.vercel.app/products?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="3MTJK8R8X9axE9uGbQDvnahggmEihJstzxu8xOAK-Ys" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <CartProvider>
          <Navigation />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
