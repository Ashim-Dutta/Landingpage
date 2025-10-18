"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TrueFocus from "../animations/trueFocus";


export default function GetStartedSection() {
  const containerVariant = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariant = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const steps = [
    {
      number: "01",
      title: "Onboard With Us",
      desc: "Set up your property with our accounts team as per your pricing and preferences.",
    },
    {
      number: "02",
      title: "Customise Your Setup",
      desc: "Add rooms, assign staff roles, and update rates — all in just a few clicks.",
    },
    {
      number: "03",
      title: "Go Live Seamlessly",
      desc: "Start managing check-ins, housekeeping, and revenue in real time — effortlessly.",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getLineFill = (index) => {
    if (activeStep > index) return 100;
    if (activeStep === index) return 100;
    return 0;
  };

  return (
    <div className="w-full">
      {/* Steps Section */}
      <section className="bg-[#EEEAFB] pt-[36px] px-4 pb-[56px] md:pt-[56px] md:px-[100px] md:pb-[96px] overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariant}
        >
          <motion.h2
            className="text-[28px] md:text-[40px] font-[700] text-center mb-2"
            variants={itemVariant}
          >
            Get Started Easily with 3 Simple Steps
          </motion.h2>
          <motion.p
            className="text-[16px] md:text-[20px] font-[400] text-[#636363] text-center mb-12"
            variants={itemVariant}
          >
            AI Hotel Management Made Simple and Fast
          </motion.p>

          {/* Steps */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 max-w-6xl mx-auto w-full text-center relative"
            variants={containerVariant}
          >
            {steps.map((step, idx) => (
              <React.Fragment key={step.number}>
                {/* Step */}
                <motion.div
                  className="flex flex-col items-center text-center md:w-1/3 px-2 relative z-10"
                  variants={itemVariant}
                >
                  {/* Number + Step inside circle */}
                  <div
                    className={`rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center font-semibold transition-all duration-700 ${
                      activeStep === idx
                        ? "bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg"
                        : "bg-white border-2 border-purple-300 text-purple-600"
                    }`}
                  >
                    <span className="text-[16px] md:text-[20px] font-bold leading-none">
                      {step.number}
                    </span>
                    <span className="text-[10px] md:text-[12px] font-medium leading-none mt-[4px]">
                      STEP
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 mt-3">{step.title}</h3>
                  <p className="text-[16px] md:text-[18px] font-[400] text-[#484848] max-w-[280px]">
                    {step.desc}
                  </p>
                </motion.div>

                {/* Dotted Line + Arrow (except after last step) */}
                {idx < steps.length - 1 && (
                  <>
                    {/* Desktop horizontal line */}
                    <div className="hidden md:flex items-center relative z-0">
                      <div className="relative w-40 h-6 flex items-center">
                        {/* Dotted line */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dotted border-gray-300"></div>
                        {/* Animated fill */}
                        <div
                          className="absolute top-1/2 left-0 h-0.5 border-t-2 border-dotted border-purple-600 transition-all duration-700"
                          style={{
                            width: `${getLineFill(idx) === 100 ? "100%" : "0%"}`,
                          }}
                        ></div>
                        {/* Arrow */}
                        <svg
                          className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-5 h-5 text-purple-600 transition-colors duration-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style={{
                            color:
                              activeStep === idx + 1 ? "#9C38FA" : "#D1C4E9",
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Mobile vertical line */}
                    <div className="md:hidden flex flex-col items-center relative z-0">
                      <div className="relative h-16 w-6 flex flex-col items-center">
                        {/* Dotted line */}
                        <div className="absolute left-1/2 top-0 h-full w-0.5 border-l-2 border-dotted border-gray-300"></div>
                        {/* Animated fill */}
                        <div
                          className="absolute left-1/2 top-0 w-0.5 border-l-2 border-dotted border-purple-600 transition-all duration-700"
                          style={{
                            height: `${getLineFill(idx) === 100 ? "100%" : "0%"}`,
                          }}
                        ></div>
                        {/* Arrow */}
                        <svg
                          className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] w-5 h-5 text-purple-600 transition-colors duration-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style={{
                            color:
                              activeStep === idx + 1 ? "#9C38FA" : "#D1C4E9",
                            transform: "translateX(-50%) rotate(90deg)",
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Demo Form Section */}
      <section className="bg-[#6609BE] py-16 px-6 relative">
          <div className="absolute left-30 inset-0 bg-[url('/image.png')] bg-cover bg-center pointer-events-none"></div>
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariant}
        >
          {/* Text Content */}
          <motion.div
            className="text-white max-w-lg text-center md:text-left"
            variants={itemVariant}
          >
            <h2 className="text-[28px] md:text-[40px] font-[700] mb-4">
            Schedule Your Free Demo Today
            </h2>
            <p className="text-gray-200 text-[16px] md:text-[24px] font-[400]">
              See how DigiStay simplifies every part of your operations.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md"
            variants={itemVariant}
          >
            <form className="space-y-4">
              <div>
                <label className="block font-[500] text-[12px] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block font-[500] text-[12px] mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +62 30123406"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-[500] text-[12px] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. Ramesh96@gmail.com"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block font-[500] text-[12px] mb-1">
                    Hotel Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hotel Grand"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-[500] text-[12px] mb-1">
                    No of Rooms
                  </label>
                  <input
                    min="0"
                    type="number"
                    placeholder="e.g. 50"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-700 to-purple-900 cursor-pointer text-white font-semibold rounded-md py-3 transition-all hover:scale-105"
              >
                Book Your Free Demo
              </button>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
