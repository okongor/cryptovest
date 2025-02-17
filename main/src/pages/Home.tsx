import React, { useState } from "react";
import { InvestmentCard } from "../components/InvestmentCard";
import  FAQSection from "../components/faq";
import { PaymentModal } from "../components/PaymentModal";
import { NotPaymentModal } from "../components/NotPaidModal";
import { ArrowRight, TrendingUp, Shield, Clock, Users, Globe, BoxIcon, Wallet } from "lucide-react";
export function Home({
  theme
}) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("Sorry it seems you have no active investments lets change that");
  };
  const investmentPlans = [{
    months: 3,
    multiplier: 3,
    name: "Starter"
  }, {
    months: 5,
    multiplier: 5,
    name: "Growth"
  }, {
    months: 7,
    multiplier: 7,
    name: "Premium"
  }];
  return <div className="relative z-10">
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">
            Invest in Your
            <span className="text-yellow-500"> Crypto </span>
            Future
          </h1>
          <p className="text-xl mb-8 opacity-80">
            Join thousands of investors earning real income through our
            secure crypto investment platform
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#startinvesting">
            <button  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center">
              Start Investing <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            </a>
            <button onClick={handleClick} className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} px-8 py-3 rounded-lg font-medium inline-flex items-center hover:bg-yellow-500 hover:text-white transition-colors`}>
              View Performance
            </button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800/50" : "bg-white/50"}`}>
              <p className="text-3xl font-bold text-yellow-500">$50M+</p>
              <p className="text-sm opacity-70">Total Investments</p>
            </div>
            <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800/50" : "bg-white/50"}`}>
              <p className="text-3xl font-bold text-yellow-500">15K+</p>
              <p className="text-sm opacity-70">Active Investors</p>
            </div>
            <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800/50" : "bg-white/50"}`}>
              <p className="text-3xl font-bold text-yellow-500">98%</p>
              <p className="text-sm opacity-70">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose CryptoVest
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-xl`}>
              <TrendingUp className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">High Returns</h3>
              <p className="opacity-70">
                Earn up to 7x returns on your investments
              </p>
            </div>
            <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-xl`}>
              <Shield className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Platform</h3>
              <p className="opacity-70">
                Your investments are protected and secure
              </p>
            </div>
            <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-xl`}>
              <Clock className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Terms</h3>
              <p className="opacity-70">
                Choose from various investment periods
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-yellow-500/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{
            icon: Wallet,
            title: "Choose Currency",
            desc: "Select from multiple cryptocurrencies"
          }, {
            icon: BoxIcon,
            title: "Select Plan",
            desc: "Pick an investment duration"
          }, {
            icon: Users,
            title: "Invest",
            desc: "Make your investment securely"
          }, {
            icon: Globe,
            title: "Earn Returns",
            desc: "Watch your investment grow"
          }].map((step, index) => <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <step.icon className="w-12 h-12 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="opacity-70">{step.desc}</p>
              </div>)}
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto" id="startinvesting">
          <h2 className="text-3xl font-bold text-center mb-4">
            Investment Plans
          </h2>
          <p className="text-center mb-12 opacity-70 max-w-2xl mx-auto">
            Choose from our bespoke investment plans tailored to meet
            your crypto investment goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto" >
            {investmentPlans.map(plan => <InvestmentCard key={plan.months} {...plan} theme={theme} onInvest={() => {
            setSelectedPlan(plan);
            setShowPaymentModal(true);
          }} />)}
          </div>
        </div>
      </section>
      {/* <section className="py-16 px-4 bg-yellow-500/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">FAQS</h2>
          <p className="mb-8 opacity-70">
            Learn more about our platform and investment process
          </p>
          {/* <FAQSection/>
          
        </div>
        
      </section> */}
      {showPaymentModal && <PaymentModal plan={selectedPlan} onClose={() => setShowPaymentModal(false)} theme={theme} />}
    </div>;
}