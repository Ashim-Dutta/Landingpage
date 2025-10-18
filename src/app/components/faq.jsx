'use client'
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // optional (for icons)

const faqs = [
  {
    question: "How long does DigiStay’s AI hotel management system’s setup take?",
    answer:
      "Our implementation experts ensure that DigiStay is fully set up in just 1 hour, providing end-to-end support so your operations never miss a beat.",
  },
  {
    question: "Is my data secure with this PMS property management system?",
    answer:
      "Absolutely. DigiStay uses enterprise-grade encryption and secure cloud infrastructure to keep your hotel and guest data safe at all times.",
  },
  {
    question:
      "Can DigiStay integrate with my existing systems, and will my staff need extensive training?",
    answer:
      "Yes, DigiStay seamlessly integrates with popular hotel systems and is designed with simplicity in mind — your staff can get started with minimal training.",
  },
  {
    question: "Can DigiStay help increase my revenue?",
    answer:
      "Definitely. DigiStay automates pricing, improves occupancy tracking, and provides real-time analytics to help you boost revenue efficiently.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className=" w-[358px] md:w-[600px] mx-auto text-center mb-12">
        <h2 className="font-bold font-[700] text-[28px] md:text-[40px] text-gray-900 mb-3 leading-none">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-500 font-[400] text-[18px] md:text-[20px] md:mt-6">
          Your all-in-one AI in the hotel industry for smarter, faster, stress-free hotel management.
        </p>
      </div>

      <div className="max-w-3xl mx-auto divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-5">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
            >
              <span className="text-[20px] font-[600] text-gray-900">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-gray-600 w-5 h-5" />
              ) : (
                <ChevronDown className="text-gray-600 w-5 h-5" />
              )}
            </button>

            {openIndex === index && (
              <div className="mt-3 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
