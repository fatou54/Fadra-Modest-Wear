"use client";

export default function TermsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 
          className="text-5xl mb-4 text-center"
          style={{ fontFamily: "serif", color: "#1a1a1a" }}
        >
          Terms of Service
        </h1>
        <p className="text-center mb-12" style={{ color: "#666" }}>
          Last updated: February 7, 2026
        </p>

        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Agreement to Terms
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              By accessing and using the FADRA website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Orders
            </h2>
            <p className="mb-4" style={{ color: "#666", lineHeight: 1.8 }}>
              When you place an order with FADRA:
            </p>
            <ul className="space-y-2 ml-6">
              <li style={{ color: "#666" }}>You must provide accurate and complete information</li>
              <li style={{ color: "#666" }}>You agree to pay all charges at the prices in effect when you place your order</li>
              <li style={{ color: "#666" }}>We reserve the right to refuse or cancel any order</li>
              <li style={{ color: "#666" }}>Order acceptance is subject to product availability</li>
              <li style={{ color: "#666" }}>Prices are subject to change without notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Payments
            </h2>
            <p className="mb-4" style={{ color: "#666", lineHeight: 1.8 }}>
              Payment terms:
            </p>
            <ul className="space-y-2 ml-6">
              <li style={{ color: "#666" }}>All payments are processed securely through Stripe</li>
              <li style={{ color: "#666" }}>Prices are listed in Malaysian Ringgit (RM)</li>
              <li style={{ color: "#666" }}>Payment is required at the time of order placement</li>
              <li style={{ color: "#666" }}>We are not responsible for payment processing errors</li>
              <li style={{ color: "#666" }}>Refunds are subject to our Returns & Exchanges policy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Shipping
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              We ship to addresses within Malaysia only. Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers, customs, or circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Intellectual Property
            </h2>
            <p className="mb-4" style={{ color: "#666", lineHeight: 1.8 }}>
              All content on this website, including but not limited to:
            </p>
            <ul className="space-y-2 ml-6">
              <li style={{ color: "#666" }}>Text, images, logos, and graphics</li>
              <li style={{ color: "#666" }}>Product descriptions and photographs</li>
              <li style={{ color: "#666" }}>Website design and layout</li>
              <li style={{ color: "#666" }}>Software and code</li>
            </ul>
            <p className="mt-4" style={{ color: "#666", lineHeight: 1.8 }}>
              ...is the property of FADRA or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              User Conduct
            </h2>
            <p className="mb-4" style={{ color: "#666", lineHeight: 1.8 }}>
              You agree not to:
            </p>
            <ul className="space-y-2 ml-6">
              <li style={{ color: "#666" }}>Use the website for any unlawful purpose</li>
              <li style={{ color: "#666" }}>Attempt to gain unauthorized access to our systems</li>
              <li style={{ color: "#666" }}>Interfere with the website's operation</li>
              <li style={{ color: "#666" }}>Transmit viruses or harmful code</li>
              <li style={{ color: "#666" }}>Impersonate another person or entity</li>
              <li style={{ color: "#666" }}>Scrape or harvest data from the website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Liability
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              FADRA and its affiliates are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products. Our total liability shall not exceed the amount you paid for the product in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Indemnification
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              You agree to indemnify and hold harmless FADRA, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your violation of these Terms of Service or your use of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Governing Law
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              These Terms of Service are governed by the laws of Malaysia. Any disputes shall be resolved in the courts of Kuala Lumpur, Malaysia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Changes to Terms
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Contact Information
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              For questions about these Terms of Service, contact us at:
            </p>
            <p className="mt-4" style={{ color: "#666" }}>
              Email: fadra.wear@gmail.com<br />
              Address: 123 Fashion Avenue, Kuala Lumpur, 50450, Malaysia
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
