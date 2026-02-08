"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 
          className="text-5xl mb-4 text-center"
          style={{ fontFamily: "serif", color: "#1a1a1a" }}
        >
          Privacy Policy
        </h1>
        <p className="text-center mb-12" style={{ color: "#666" }}>
          Last updated: February 7, 2026
        </p>

        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Introduction
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              At FADRA, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website and make purchases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Data Collection
            </h2>
            <p className="mb-4" style={{ color: "#666", lineHeight: 1.8 }}>
              We collect the following types of information:
            </p>
            <ul className="space-y-2 ml-6">
              <li style={{ color: "#666" }}>
                <strong>Personal Information:</strong> Name, email address, shipping address, phone number
              </li>
              <li style={{ color: "#666" }}>
                <strong>Payment Information:</strong> Credit card details (securely processed through Stripe)
              </li>
              <li style={{ color: "#666" }}>
                <strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on site
              </li>
              <li style={{ color: "#666" }}>
                <strong>Order History:</strong> Products purchased, order dates, transaction details
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              How We Use Your Data
            </h2>
            <p className="mb-4" style={{ color: "#666", lineHeight: 1.8 }}>
              We use your information to:
            </p>
            <ul className="space-y-2 ml-6">
              <li style={{ color: "#666" }}>Process and fulfill your orders</li>
              <li style={{ color: "#666" }}>Communicate with you about your orders and account</li>
              <li style={{ color: "#666" }}>Send promotional emails (with your consent)</li>
              <li style={{ color: "#666" }}>Improve our website and customer experience</li>
              <li style={{ color: "#666" }}>Prevent fraud and enhance security</li>
              <li style={{ color: "#666" }}>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Cookies
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings. Some features of our site may not function properly if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Data Sharing
            </h2>
            <p className="mb-4" style={{ color: "#666", lineHeight: 1.8 }}>
              We do not sell your personal information. We may share your data with:
            </p>
            <ul className="space-y-2 ml-6">
              <li style={{ color: "#666" }}>
                <strong>Service Providers:</strong> Payment processors (Stripe), shipping companies, email service providers
              </li>
              <li style={{ color: "#666" }}>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights
              </li>
              <li style={{ color: "#666" }}>
                <strong>Business Transfers:</strong> In the event of a merger, sale, or acquisition
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Your Rights
            </h2>
            <p className="mb-4" style={{ color: "#666", lineHeight: 1.8 }}>
              You have the right to:
            </p>
            <ul className="space-y-2 ml-6">
              <li style={{ color: "#666" }}>Access your personal data</li>
              <li style={{ color: "#666" }}>Correct inaccurate information</li>
              <li style={{ color: "#666" }}>Request deletion of your data</li>
              <li style={{ color: "#666" }}>Opt out of marketing communications</li>
              <li style={{ color: "#666" }}>Object to data processing</li>
              <li style={{ color: "#666" }}>Request data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Data Security
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All payment information is encrypted using SSL technology and processed through secure payment gateways.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Data Retention
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Contact Us
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              If you have any questions about this privacy policy or wish to exercise your rights, please contact us at:
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
