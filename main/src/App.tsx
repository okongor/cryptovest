import React, { useState } from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { GeometricBackground } from "./components/GeometricBackground";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
export function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    
    
  };
  return (
    <AuthProvider>
      <Router>
        <div
          className={`min-h-screen w-full relative ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
          }`}
        >
          <GeometricBackground theme={theme} />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/login" element={<Login theme={theme} />} />
              <Route path="/signup" element={<Signup theme={theme} />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home theme={theme} />
                  </ProtectedRoute>
                }
              />
              <Route path="/about" element={<About theme={theme} />} />
              <Route path="/contact" element={<Contact theme={theme} />} />
            </Routes>
          </div>
          <Footer theme={theme} />
        </div>
      </Router>
    </AuthProvider>
  );
  
  
}