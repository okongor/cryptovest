import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Bitcoin, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export function Navbar({ theme, toggleTheme }) {
  const location = useLocation();
  const { isAuthenticated, logout, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", protected: true },
    { path: "/about", label: "About", protected: false },
    { path: "/contact", label: "Contact", protected: false },
  ];

  return (
    <nav
      className={`w-full py-4 px-6 ${
        theme === "dark" ? "bg-gray-800/90 text-white" : "bg-white/90 text-black"
      } shadow-md backdrop-blur-md sticky top-0 z-50`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Bitcoin className="w-8 h-8 text-yellow-500" />
          <span className="text-xl font-bold">CryptoVest</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(
            (link) =>
              (!link.protected || isAuthenticated) && (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`hover:text-yellow-500 transition-colors ${
                    location.pathname === link.path ? "text-yellow-500" : ""
                  }`}
                >
                  {link.label}
                </Link>
              )
          )}
        </div>

        {/* Right Section: User & Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* Desktop Greeting & Logout */}
          {isAuthenticated && (
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm opacity-70">Hi, {user?.name}</span>
              <button
                onClick={logout}
                className="flex items-center space-x-1 hover:text-yellow-500"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}

          {!isAuthenticated && (
            <Link to="/login" className="hidden md:block hover:text-yellow-500 transition-colors">
              Login
            </Link>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
            }`}
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-16 left-0 w-full shadow-md p-4 transition-all duration-300 ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map(
              (link) =>
                (!link.protected || isAuthenticated) && (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ${
                      location.pathname === link.path ? "text-yellow-500" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                )
            )}

            {/* Mobile Greeting & Logout */}
            {isAuthenticated ? (
              <div className="mt-4 border-t border-gray-300 pt-3">
                <span className="block text-sm text-gray-500">Hi, {user?.name}</span>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-2 mt-2 py-2 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="mt-4 border-t border-gray-300 pt-3 block py-2 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
