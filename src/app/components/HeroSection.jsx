"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Header phrases
const headerPhrases = ["AI Hotel Management ", "System for Smooth Operations"];

// Animation Variants
const phraseVariant = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

// Floating animation for images
const floatVariant = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

// Combined button animation: float + shine
const buttonCombinedVariant = {
  animate: {
    y: [0, -6, 0],
    backgroundPosition: ["0% 50%", "100% 50%"],
    transition: {
      y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" },
    },
  },
};

export default function HeroSection() {
  const [showFixedButton, setShowFixedButton] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      setShowFixedButton(heroBottom < -100 && window.innerWidth < 768);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative overflow-hidden lg:h-screen"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F0ECFA 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          {/* Left Section */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold text-sm sm:text-base mx-auto lg:mx-0"
              variants={phraseVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="bg-purple-700 text-white px-2 py-1 rounded-full text-xs sm:text-sm">
                #1
              </span>
              <span>AI in Hotel Industry</span>
            </motion.div>

            {/* Header */}
            <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-gray-900 leading-tight max-w-3xl mx-auto lg:mx-0">
              {headerPhrases.map((phrase, index) => (
                <motion.span
                  key={index}
                  className="block"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={phraseVariant}
                  transition={{ delay: index * 0.3 }}
                >
                  {phrase}
                </motion.span>
              ))}
            </h1>

            {/* Paragraph */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Automate Operations, Boost Revenue, and Guest Experience with
              All-In-One AI Hotel Management System
            </motion.p>

            {/* Arrow Image */}
            <motion.img
              src="/arrow.png"
              alt="Arrow"
              className="absolute left-[28rem] top-[52%] w-12 h-12 sm:w-48 sm:h-48"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />

            {/* Main Button */}
            <motion.button
              variants={buttonCombinedVariant}
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#6609BE] to-[#2F0458] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all text-base sm:text-lg bg-[length:200%_200%]"
            >
              Book Your Free Demo
            </motion.button>

            {/* Clients */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center justify-center md:justify-start gap-x-12 md:gap-3"
            >
              <div className="flex -space-x-4">
                <img src="/person1.png" alt="Client 1" className="w-15 h-15 rounded-full border-2 border-white" />
                <img src="/person2.png" alt="Client 2" className="w-15 h-15 rounded-full border-2 border-white" />
                <img src="/person3.png" alt="Client 3" className="w-15 h-15 rounded-full border-2 border-white" />
              </div>
              <p className="text-[16px] font-normal text-gray-900 text-start">
                Trusted by <span className="font-bold">1,000+ Hotels</span> across India
              </p>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="relative flex justify-center mt-10 lg:mt-0 -right-12 lg:top-0 lg:-right-52">
            {/* Dashboard */}
            <motion.img
              src="/dashboard.png"
              alt="Dashboard Preview"
              className="w-full max-w-2xl sm:max-w-lg rounded-2xl shadow-2xl border border-gray-200"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />

            {/* Mobile */}
            <motion.img
              src="/mobile.png"
              alt="Mobile Preview"
              className="absolute lg:-bottom-10 lg:left-20 -bottom-16 left-8 -translate-x-1/2 w-[180px] sm:w-[220px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />

            {/* AI Badge */}
            <motion.div
              className="absolute -top-24 right-24 hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              <img src="/ai.png" alt="AI Icon" className="w-full h-full mb-2" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Button for Mobile */}
      {showFixedButton && (
        <div className="fixed bottom-0 left-0 w-full px-4 z-50 md:hidden bg-white p-6 inset-shadow-2xl border-t border-gray-200">
          <motion.button
            variants={buttonCombinedVariant}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full px-6 py-4 bg-gradient-to-r from-[#6609BE] to-[#2F0458] text-white font-semibold rounded-xl shadow-xl hover:from-[#7C0DDE] hover:to-[#3F0568] transition-colors text-base bg-[length:200%_200%]"
          >
            Book Your Free Demo
          </motion.button>
        </div>
      )}
    </>
  );
}
