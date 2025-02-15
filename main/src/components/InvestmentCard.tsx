import React, { useState } from "react";
import { Bitcoin, DollarSign, Coins, Wallet } from "lucide-react";
import { PaymentModal } from "./PaymentModal";

export function InvestmentCard({ months, multiplier, name, theme }) {
  const [amount, setAmount] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");
  const [showModal, setShowModal] = useState(false);

  const cryptoOptions = [
    { id: "BTC", name: "Bitcoin", icon: Bitcoin, minAmount: 0.0001, wallet: "19LAdvMyNZ2KffmNn5Yzphq6PvdnJFVe1b" },
    { id: "ETH", name: "Ethereum", icon: Wallet, minAmount: 0.001, wallet: "0x21b137285A4D3cc256D8f3a2F1B585bBAc48f10E" },
    { id: "USDT", name: "Tether", icon: DollarSign, minAmount: 10, wallet: "0x21b137285A4D3cc256D8f3a2F1B585bBAc48f10E" },
    { id: "SOL", name: "Solana", icon: Coins, minAmount: 10, wallet: "rkj3bPcSA3rTNRPLg39oJFkZZCsQxk8KwAixzwgPKcR" }
  ];

  const selectedCryptoData = cryptoOptions.find((c) => c.id === selectedCrypto);

  const calculateReturns = () => {
    const cryptoAmount = parseFloat(amount) || 0;
    return (cryptoAmount * multiplier).toFixed(selectedCrypto === "USDT" ? 2 : 8);
  };

  const handleInvest = () => {
    if (parseFloat(amount) < selectedCryptoData.minAmount) {
      alert(`Minimum investment for ${selectedCrypto} is ${selectedCryptoData.minAmount}`);
      return;
    }
    setShowModal(true);
  };

  return (
    <div className={`rounded-xl p-6 ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-xl backdrop-blur-lg transition-all hover:scale-105`}>
      <div className="absolute top-4 right-4">
        <span className={`px-3 py-1 rounded-full text-sm ${name === "Premium" ? "bg-yellow-500 text-white" : theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
          {name === "Premium" ? "Best Value" : `${multiplier}x Returns`}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-4">{name} Plan</h3>
      <div className="mb-6">
        <p className="text-lg mb-2">{months} Months Lock Period</p>
        <p className="text-sm opacity-70">Returns: {multiplier}x investment</p>
        <div className="mt-3 text-sm">
          <p className="text-yellow-500">Benefits:</p>
          <ul className="list-disc list-inside opacity-70 mt-2 space-y-1">
            <li>24/7 Market monitoring</li>
            <li>Automated reinvestment</li>
            {name === "Premium" && <li>Priority support</li>}
            {name === "Premium" && <li>Early withdrawal option</li>}
          </ul>
        </div>
      </div>

      {/* Crypto Selection */}
      <div className="mb-6">
        <label className="block text-sm mb-2">Select Cryptocurrency</label>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {cryptoOptions.map((crypto) => (
            <button
              key={crypto.id}
              onClick={() => setSelectedCrypto(crypto.id)}
              className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg ${
                selectedCrypto === crypto.id ? "bg-yellow-500 text-white" : theme === "dark" ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <crypto.icon className="w-4 h-4" />
              <span>{crypto.id}</span>
            </button>
          ))}
        </div>
        <div className="mb-2">
          <label className="block text-sm mb-2">Investment Amount ({selectedCrypto})</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={`w-full p-2 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} border-2 border-transparent focus:border-yellow-500 outline-none`}
            placeholder={`Min: ${selectedCryptoData?.minAmount}`}
          />
          <p className="text-xs mt-1 opacity-70">Minimum investment: {selectedCryptoData?.minAmount} {selectedCrypto}</p>
        </div>
      </div>

      {/* Estimated Returns */}
      <div className="mb-6 p-3 rounded-lg bg-yellow-500/10">
        <p className="text-sm text-yellow-500">Estimated Returns:</p>
        <p className="text-xl font-bold">{calculateReturns()} {selectedCrypto}</p>
        <p className="text-xs opacity-70 mt-1">*Returns calculated based on current rates</p>
      </div>

      {/* Invest Button */}
      <button onClick={handleInvest} className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors">
        Invest Now
      </button>

      {/* Payment Modal */}
      {showModal && (
        <PaymentModal 
          plan={{ months, multiplier }} 
          onClose={() => setShowModal(false)} 
          theme={theme} 
          selectedCrypto={selectedCrypto} 
          walletAddress={selectedCryptoData.wallet} 
        />
      )}
    </div>
  );
}
