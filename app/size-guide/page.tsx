"use client";

export default function SizeGuidePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h1 
          className="text-5xl mb-4 text-center"
          style={{ fontFamily: "serif", color: "#1a1a1a" }}
        >
          Size Guide
        </h1>
        <p className="text-center mb-12 text-lg" style={{ color: "#666" }}>
          Find your perfect fit with our comprehensive sizing charts
        </p>

        {/* How to Measure */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: "#1a1a1a" }}>
            How to Measure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                📏
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Bust/Chest</h3>
              <p className="text-sm" style={{ color: "#666" }}>
                Measure around the fullest part of your bust/chest
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                📏
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Waist</h3>
              <p className="text-sm" style={{ color: "#666" }}>
                Measure around your natural waistline
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                📏
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Hips</h3>
              <p className="text-sm" style={{ color: "#666" }}>
                Measure around the fullest part of your hips
              </p>
            </div>
          </div>
        </div>

        {/* Women's Size Chart */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1a1a1a" }}>
            Women's Clothing
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}>
                  <th className="p-4 text-left">Size</th>
                  <th className="p-4 text-left">Bust (inches)</th>
                  <th className="p-4 text-left">Waist (inches)</th>
                  <th className="p-4 text-left">Hips (inches)</th>
                  <th className="p-4 text-left">International</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "XS", bust: "30-32", waist: "23-25", hips: "33-35", intl: "UK 6 / EU 34" },
                  { size: "S", bust: "32-34", waist: "25-27", hips: "35-37", intl: "UK 8 / EU 36" },
                  { size: "M", bust: "34-36", waist: "27-29", hips: "37-39", intl: "UK 10 / EU 38" },
                  { size: "L", bust: "36-38", waist: "29-31", hips: "39-41", intl: "UK 12 / EU 40" },
                  { size: "XL", bust: "38-40", waist: "31-33", hips: "41-43", intl: "UK 14 / EU 42" },
                  { size: "XXL", bust: "40-42", waist: "33-35", hips: "43-45", intl: "UK 16 / EU 44" }
                ].map((row, i) => (
                  <tr key={i} className="border-b" style={{ backgroundColor: i % 2 === 0 ? "#f9f9f9" : "#ffffff" }}>
                    <td className="p-4 font-semibold">{row.size}</td>
                    <td className="p-4" style={{ color: "#666" }}>{row.bust}</td>
                    <td className="p-4" style={{ color: "#666" }}>{row.waist}</td>
                    <td className="p-4" style={{ color: "#666" }}>{row.hips}</td>
                    <td className="p-4" style={{ color: "#666" }}>{row.intl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Men's Size Chart */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1a1a1a" }}>
            Men's Clothing
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}>
                  <th className="p-4 text-left">Size</th>
                  <th className="p-4 text-left">Chest (inches)</th>
                  <th className="p-4 text-left">Waist (inches)</th>
                  <th className="p-4 text-left">Neck (inches)</th>
                  <th className="p-4 text-left">International</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "S", chest: "34-36", waist: "28-30", neck: "14-14.5", intl: "UK 36 / EU 46" },
                  { size: "M", chest: "38-40", waist: "32-34", neck: "15-15.5", intl: "UK 38 / EU 48" },
                  { size: "L", chest: "42-44", waist: "36-38", neck: "16-16.5", intl: "UK 40 / EU 50" },
                  { size: "XL", chest: "46-48", waist: "40-42", neck: "17-17.5", intl: "UK 42 / EU 52" },
                  { size: "XXL", chest: "50-52", waist: "44-46", neck: "18-18.5", intl: "UK 44 / EU 54" }
                ].map((row, i) => (
                  <tr key={i} className="border-b" style={{ backgroundColor: i % 2 === 0 ? "#f9f9f9" : "#ffffff" }}>
                    <td className="p-4 font-semibold">{row.size}</td>
                    <td className="p-4" style={{ color: "#666" }}>{row.chest}</td>
                    <td className="p-4" style={{ color: "#666" }}>{row.waist}</td>
                    <td className="p-4" style={{ color: "#666" }}>{row.neck}</td>
                    <td className="p-4" style={{ color: "#666" }}>{row.intl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Shoe Size Chart */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1a1a1a" }}>
            Footwear
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4" style={{ color: "#1a1a1a" }}>Women's Shoes</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}>
                    <th className="p-3 text-left">US</th>
                    <th className="p-3 text-left">UK</th>
                    <th className="p-3 text-left">EU</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { us: "5", uk: "3", eu: "35" },
                    { us: "6", uk: "4", eu: "36" },
                    { us: "7", uk: "5", eu: "37" },
                    { us: "8", uk: "6", eu: "38" },
                    { us: "9", uk: "7", eu: "39" },
                    { us: "10", uk: "8", eu: "40" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b" style={{ backgroundColor: i % 2 === 0 ? "#f9f9f9" : "#ffffff" }}>
                      <td className="p-3">{row.us}</td>
                      <td className="p-3" style={{ color: "#666" }}>{row.uk}</td>
                      <td className="p-3" style={{ color: "#666" }}>{row.eu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-semibold mb-4" style={{ color: "#1a1a1a" }}>Men's Shoes</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}>
                    <th className="p-3 text-left">US</th>
                    <th className="p-3 text-left">UK</th>
                    <th className="p-3 text-left">EU</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { us: "7", uk: "6", eu: "40" },
                    { us: "8", uk: "7", eu: "41" },
                    { us: "9", uk: "8", eu: "42" },
                    { us: "10", uk: "9", eu: "43" },
                    { us: "11", uk: "10", eu: "44" },
                    { us: "12", uk: "11", eu: "45" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b" style={{ backgroundColor: i % 2 === 0 ? "#f9f9f9" : "#ffffff" }}>
                      <td className="p-3">{row.us}</td>
                      <td className="p-3" style={{ color: "#666" }}>{row.uk}</td>
                      <td className="p-3" style={{ color: "#666" }}>{row.eu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Help Box */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
            Still Not Sure About Your Size?
          </h3>
          <p className="mb-6" style={{ color: "#666" }}>
            Our styling team is here to help you find the perfect fit
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
          >
            Get Sizing Help
          </a>
        </div>
      </div>
    </main>
  );
}
