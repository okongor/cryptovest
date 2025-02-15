import React from "react";
import { Link } from "react-router-dom";
import { Bitcoin, Twitter, Facebook, Instagram, Mail } from "lucide-react";
export function Footer({
  theme
}) {
  return <footer className={`w-full py-12 px-6 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} mt-20`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Bitcoin className="w-8 h-8 text-yellow-500" />
            <span className="text-xl font-bold">CryptoVest</span>
          </div>
          <p className="text-sm opacity-70">
            Secure your future with smart crypto investments
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Supported Crypto</h3>
          <ul className="space-y-2">
            <li>Bitcoin (BTC)</li>
            <li>Ethereum (ETH)</li>
            <li>Tether (USDT)</li>
            <li>Cardano (ADA)</li>
            <li>And more coming soon...</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <Twitter className="w-5 h-5 hover:text-yellow-500 cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-yellow-500 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-yellow-500 cursor-pointer" />
            <Mail className="w-5 h-5 hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700">
        <p className="text-center text-sm opacity-70">
          © 2024 CryptoVest. All rights reserved.
        </p>
      </div>
    </footer>;
}