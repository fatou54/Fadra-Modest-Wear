import "./globals.css";
import Navigation from "./components/Navigation";
import { CartProvider } from "@/lib/cartContext";
import { AuthProvider } from "@/lib/authContext";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL('https://fadra-modest-store.vercel.app'),
  title: {
    default: "FADRA - Luxury Modest Fashion | Premium Abayas, Hijabs & Modest Wear",
    template: "%s | FADRA"
  },
  description: "Curating the finest in luxury modest fashion for the modern world. Shop premium abayas, hijabs, modest dresses, and luxury accessories for women and men.",
  keywords: ["modest fashion", "luxury abayas", "hijabs", "modest dresses", "islamic fashion", "modest clothing", "designer abayas", "premium hijabs", "muslim fashion", "modest wear"],
  authors: [{ name: "FADRA" }],
  creator: "FADRA",
  publisher: "FADRA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fadra-modest-store.vercel.app',
    siteName: 'FADRA',
    title: 'FADRA - Luxury Modest Fashion',
    description: 'Curating the finest in luxury modest fashion for the modern world. Shop premium abayas, hijabs, modest dresses, and luxury accessories.',
    images: [
      {
        url: '/hero-models.jpg',
        width: 1200,
        height: 630,
        alt: 'FADRA Luxury Modest Fashion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADRA - Luxury Modest Fashion',
    description: 'Curating the finest in luxury modest fashion for the modern world.',
    images: ['/hero-models.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '3MTJK8R8X9axE9uGbQDvnahggmEihJstzxu8xOAK-Ys',
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
        <link rel="canonical" href="https://fadra-modest-store.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <AuthProvider>
          <CartProvider>
            <Navigation />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
