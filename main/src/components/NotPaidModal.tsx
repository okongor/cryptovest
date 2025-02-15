import React from "react";
import { X } from "lucide-react";
export function NotPaymentModal({
  plan,
  onClose,
  themev
}) {
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className={`relative rounded-xl p-6 max-w-md w-full ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <button onClick={onClose} className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-2xl font-bold mb-4">Complete Your Investment</h3>
        <p className="mb-4">Send your BTC to the following address:</p>
        <div className={`p-4 rounded-lg mb-6 font-mono text-sm ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
          bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
        </div>
        <div className="space-y-2 text-sm opacity-70">
          <p>• Transaction may take 1-3 minutes to confirm</p>
          <p>• You will receive an email confirmation in 2-3 minutes and a link to activate your account</p>
          <p>• Your investment will be locked for {plan.months} months</p>
          <p>• Expected returns: {plan.multiplier}x your investment</p>
        </div>
      </div>
    </div>;
}
