"use client";

export default function FAQPage() {
  const faqs = [
    {
      category: "Orders",
      questions: [
        {
          q: "How do I place an order?",
          a: "Browse our collections, add items to your cart, and proceed to checkout. You'll need to provide shipping information and payment details."
        },
        {
          q: "Can I modify my order after placing it?",
          a: "Please contact us immediately at fadra.wear@gmail.com if you need to modify your order. We process orders quickly, but we'll do our best to accommodate changes."
        },
        {
          q: "How do I track my order?",
          a: "Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard."
        }
      ]
    },
    {
      category: "Shipping",
      questions: [
        {
          q: "How long does shipping take?",
          a: "Delivery typically takes 3-7 business days within Malaysia after processing (1-2 days)."
        },
        {
          q: "Do you offer free shipping?",
          a: "Yes! We offer free shipping on orders over RM 200 within West Malaysia."
        },
        {
          q: "Do you ship internationally?",
          a: "Currently, we only ship within Malaysia. International shipping coming soon!"
        }
      ]
    },
    {
      category: "Payments",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept Visa, Mastercard, Apple Pay, PayPal, and major credit/debit cards through our secure Stripe payment gateway."
        },
        {
          q: "Is my payment information secure?",
          a: "Yes, all payments are processed securely through Stripe. We never store your card information."
        },
        {
          q: "Can I pay on delivery?",
          a: "Currently, we only accept online payments. Cash on delivery is not available at this time."
        }
      ]
    },
    {
      category: "Products",
      questions: [
        {
          q: "Are your products halal-certified?",
          a: "Yes, all our beauty and cosmetic products are halal-certified."
        },
        {
          q: "How do I care for my modest wear?",
          a: "Care instructions are provided on each product tag. Generally, we recommend gentle washing and air drying for best results."
        },
        {
          q: "Do you restock sold-out items?",
          a: "Popular items are regularly restocked. You can sign up for restock notifications on product pages."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 
          className="text-5xl mb-4 text-center"
          style={{ fontFamily: "serif", color: "#1a1a1a" }}
        >
          Frequently Asked Questions
        </h1>
        <p className="text-center mb-12 text-lg" style={{ color: "#666" }}>
          Find answers to common questions about our products and services
        </p>

        {/* Accordion Sections */}
        <div className="space-y-6">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b" style={{ backgroundColor: "#1a1a1a" }}>
                <h2 className="text-xl font-semibold" style={{ color: "#ffffff" }}>
                  {section.category}
                </h2>
              </div>
              
              <div className="divide-y">
                {section.questions.map((faq, faqIndex) => (
                  <details key={faqIndex} className="group">
                    <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold pr-8" style={{ color: "#1a1a1a" }}>
                          {faq.q}
                        </h3>
                        <span className="text-2xl group-open:rotate-180 transition-transform" style={{ color: "#666" }}>
                          ▼
                        </span>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <p style={{ color: "#666", lineHeight: 1.8 }}>
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Box */}
        <div className="mt-12 bg-white rounded-lg p-8 text-center shadow-md">
          <h3 className="text-xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
            Still Have Questions?
          </h3>
          <p className="mb-6" style={{ color: "#666" }}>
            Our customer support team is always happy to help
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
