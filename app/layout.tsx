import "./globals.css";
import Navigation from "./components/Navigation";
import { CartProvider } from "@/lib/cartContext";

export const metadata = {
  title: "FADRA - Luxury Modest Fashion",
  description: "Curating the finest in luxury modest fashion for the modern world",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="3MTJK8R8X9axE9uGbQDvnahggmEihJstzxu8xOAK-Ys" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
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
