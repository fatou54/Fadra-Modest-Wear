import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif", backgroundColor: "#fdf5f7" }}>
        <nav
          style={{
            padding: "15px 30px",
            backgroundColor: "#c5b9d4",
            color: "#4a3f5c",
            display: "flex",
            gap: "20px",
          }}
        >
          <a href="/" style={{ color: "#4a3f5c", textDecoration: "none" }}>
            Home
          </a>
          <a href="/products" style={{ color: "#4a3f5c", textDecoration: "none" }}>
            Products
          </a>
        </nav>

        {children}
      </body>
    </html>
  );
}
