import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does your crypto investment strategy work?",
    answer: "We diversify investments across government bonds, real estate, forex, and exclusive opportunities, ensuring a near-zero failure rate with expert analysis."
  },
  {
    question: "Is my investment secure?",
    answer: "Yes! We employ advanced risk management strategies and AI-driven decision-making to safeguard your funds."
  },
  {
    question: "What are the expected returns?",
    answer: "Returns vary based on market conditions, but our historical performance has consistently outpaced traditional investments."
  },
  {
    question: "Can I withdraw my investment anytime?",
    answer: "Yes, we offer flexible withdrawal options. However, some investments may have lock-in periods for optimal returns."
  }
];

type FAQSectionProps = {
  theme: "light" | "dark";
};

const FAQSection = ({ theme }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`max-w-3xl mx-auto py-10 px-5 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border ${theme === "dark" ? "border-gray-700" : "border-gray-300"} rounded-2xl overflow-hidden`}
          >
            <button
              className={`w-full flex justify-between items-center p-4 text-lg font-medium ${theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-all`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className={`p-4 border-t ${theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"}`}
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
