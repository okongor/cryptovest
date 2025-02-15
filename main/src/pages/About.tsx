import React from "react";
export function About({
  theme
}) {
  return <div className="relative z-10 container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About CryptoVest</h1>
        <div className={`rounded-xl p-8 mb-12 ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-xl`}>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-6 opacity-80">
            CryptoVest is dedicated to making crypto investments accessible,
            secure, and profitable for everyone. We believe in the future of
            digital assets and aim to provide a platform that enables steady
            growth for our investors.
          </p>
          <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
          <ul className="space-y-4 opacity-80">
            <li>• Transparent investment terms and conditions</li>
            <li>• Secure and regulated platform</li>
            <li>• Multiple cryptocurrency support</li>
            <li>• Competitive returns on investments</li>
            <li>• Expert team with years of crypto experience</li>
          </ul>
        </div>
        <div className={`rounded-xl p-8 ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-xl`}>
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="mb-6 opacity-80">
            Our team consists of experienced professionals from the fields of
            blockchain technology, finance, and security. Together, we work to
            provide the best possible investment experience for our users.
          </p>
        </div>
      </div>
    </div>;
}