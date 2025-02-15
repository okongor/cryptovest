import React, { useState } from "react";
import { X, Clipboard, Check } from "lucide-react";

export function PaymentModal({ plan, onClose, theme, selectedCrypto, walletAddress }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className={`relative rounded-xl p-6 max-w-md w-full ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <button onClick={onClose} className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-2xl font-bold mb-4">Complete Your Investment</h3>
        <p className="mb-4">Send your {selectedCrypto} to the following address:</p>

        {/* Wallet Address Container */}
        <div className={`flex items-center justify-between p-3 rounded-lg mb-6 font-mono text-sm break-all ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
          <span className="w-11/12 overflow-hidden text-ellipsis">{walletAddress}</span>
          <button onClick={handleCopy} className="p-1 rounded-lg hover:bg-gray-500/20">
            {copied ? <Check className="w-5 h-5 text-green-500" /> : <Clipboard className="w-5 h-5" />}
          </button>
        </div>

        <div className="space-y-2 text-sm opacity-70">
          <p>• Transaction may take 1-3 minutes to confirm</p>
          <p>• You will receive an email confirmation in 2-3 minutes and a link to activate your account</p>
          <p>• Your investment will be locked for {plan.months} months</p>
          <p>• Expected returns: {plan.multiplier}x your investment</p>
        </div>
      </div>
    </div>
  );
}
