import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
export function Contact({
  theme
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };
  return <div className="relative z-10 container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`rounded-xl p-8 ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-xl`}>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input type="text" className={`w-full p-3 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} border-2 border-transparent focus:border-yellow-500 outline-none`} value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input type="email" className={`w-full p-3 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} border-2 border-transparent focus:border-yellow-500 outline-none`} value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm mb-2">Subject</label>
                <input type="text" className={`w-full p-3 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} border-2 border-transparent focus:border-yellow-500 outline-none`} value={formData.subject} onChange={e => setFormData({
                ...formData,
                subject: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea className={`w-full p-3 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} border-2 border-transparent focus:border-yellow-500 outline-none h-32`} value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} required></textarea>
              </div>
              <button type="submit" className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className={`rounded-xl p-8 ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-xl`}>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <span>support@cryptovest.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span>534 Mission Street, San Franscisco, California</span>
                </div>
              </div>
            </div>
            <div className={`rounded-xl p-8 ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-xl`}>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 opacity-80">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}