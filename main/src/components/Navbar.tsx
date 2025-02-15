import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Bitcoin, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
export function Navbar({
  theme,
  toggleTheme
}) {
  const location = useLocation();
  const {
    isAuthenticated,
    logout,
    user
  } = useAuth();
  const navLinks = [{
    path: "/",
    label: "Home",
    protected: true
  }, {
    path: "/about",
    label: "About",
    protected: false
  }, {
    path: "/contact",
    label: "Contact",
    protected: false
  }];
  return <nav className={`w-full py-4 px-6 ${theme === "dark" ? "bg-gray-800/90" : "bg-white/90"} shadow-md backdrop-blur-md sticky top-0 z-50`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Bitcoin className="w-8 h-8 text-yellow-500" />
          <span className="text-xl font-bold">CryptoVest</span>
        </Link>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6">
            {navLinks.map(link => (!link.protected || isAuthenticated) && <Link key={link.path} to={link.path} className={`hover:text-yellow-500 transition-colors ${location.pathname === link.path ? "text-yellow-500" : ""}`}>
                    {link.label}
                  </Link>)}
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? <>
                <span className="text-sm opacity-70">Hi, {user?.name}</span>
                <button onClick={logout} className="flex items-center space-x-1 hover:text-yellow-500">
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </> : <Link to="/login" className="hover:text-yellow-500 transition-colors">
                Login
              </Link>}
            <button onClick={toggleTheme} className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>;
}