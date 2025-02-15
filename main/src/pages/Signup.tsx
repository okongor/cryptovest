import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
export function Signup({
  theme
}: {
  theme: string;
}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    signup
  } = useAuth();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      await signup(formData.email, formData.password, formData.name);
      navigate("/");
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="relative z-10 container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <div className={`rounded-xl p-8 ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-xl`}>
          <h1 className="text-3xl font-bold mb-6 text-center">
            Create Account
          </h1>
          {error && <div className="mb-4 p-3 rounded bg-red-500/10 text-red-500 text-sm">
              {error}
            </div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" className={`w-full p-3 pl-10 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} border-2 border-transparent focus:border-yellow-500 outline-none`} value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} required />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="email" className={`w-full p-3 pl-10 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} border-2 border-transparent focus:border-yellow-500 outline-none`} value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="password" className={`w-full p-3 pl-10 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} border-2 border-transparent focus:border-yellow-500 outline-none`} value={formData.password} onChange={e => setFormData({
                ...formData,
                password: e.target.value
              })} required />
              </div>
            </div>
            <button type="submit" disabled={isLoading} className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50">
              {isLoading ? "Creating account..." : "Create Account"}
            </button>
          </form>
          <p className="mt-4 text-center text-sm opacity-70">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>;
}