import React from "react";
import { Sun, Moon, Bitcoin } from "lucide-react";
export function Header({
  theme,
  toggleTheme
}) {
  return <header className={`w-full py-4 px-6 ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bitcoin className="w-8 h-8 text-yellow-500" />
          <span className="text-xl font-bold">CryptoVest</span>
        </div>
        <button onClick={toggleTheme} className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>;
}