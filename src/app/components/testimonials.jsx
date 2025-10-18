'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Vijay Choudhary",
    company: "The Swanrim Vista",
    message:
      "DigiStay completely transformed our front desk operations. The AI Hotel Management System has been a game-changer for our hotel!",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Riya Patel",
    company: "Urban Stay",
    message:
      "Incredible software! It automated our booking system and saved us countless hours.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Rahul Mehta",
    company: "The Royal Orchid",
    message:
      "Smooth, smart, and efficient. Our entire staff loves using DigiStay.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Sneha Verma",
    company: "BlueMoon Suites",
    message:
      "The AI insights help us make smarter business decisions every day!",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Karan Singh",
    company: "Palm Grove Resort",
    message:
      "The customer support and usability of DigiStay are unmatched. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // ✅ Detect screen width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Duplicate testimonials for infinite scroll
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-[#EEEAFB] md:py-20 py-10 overflow-hidden relative">
  <div className="md:w-[1280px] mx-auto w-full px-[16px]">
    {/* Parent container with justify-between */}
    <div className="flex flex-col md:flex-row items-start md:justify-between">
      
      {/* Left: Text */}
<div
  className={`${
    isMobile
      ? "flex flex-col items-center text-center w-full"
      : "text-left"
  }`}
>
  <h2 className="text-[28px] md:text-[40px] font-[700] mb-3">
    {isMobile
      ? "Why Hoteliers Choose DigiStay?"
      : "What Clients Say About Us?"}
  </h2>
  <p
    className={`text-gray-500 mb-10 text-[16px] md:text-[20px] font-[400] ${
      isMobile ? "mx-auto w-[90%]" : "md:w-[647px]"
    }`}
  >
    {isMobile
      ? "Your all-in-one AI in the hotel industry for smarter, faster, stress-free hotel management."
      : "Your all-in-one AI in the hotel industry for smarter, faster, stress-free hotel management."}
  </p>
</div>


      {/* Right: Logo (hidden on mobile) */}
      <div className="hidden md:flex items-center md:h-[125px] md:w-[164px]">
        <img src="q.svg" alt="Logo" className="w-full h-full object-contain" />
      </div>

    </div>
  </div>

  {/* ✅ Desktop: Infinite Scroll */}
  {!isMobile && (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {repeatedTestimonials.map((item, index) => (
          <div
            key={index}
            className="w-[358px] md:max-w-[630px] bg-white rounded-xl shadow-sm p-6 border border-gray-100"
          >
            <p className="text-[#484848] text-sm leading-relaxed mb-4">
              “{item.message}”
            </p>
            <div className="flex items-center gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left">
                <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.company}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* gradient mask for smooth edge fade */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F8F6FF] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F8F6FF] to-transparent pointer-events-none" />
    </div>
  )}

  {/* ✅ Mobile: Static Column View */}
  {isMobile && (
    <div className="flex flex-col items-center gap-4 py-[56px] px-[16px]">
      {(showAll ? testimonials : testimonials.slice(0, 3)).map((item, index) => (
        <div
          key={index}
          className="w-[358px] bg-white rounded-xl shadow-sm p-[24px] border border-gray-100"
        >
          <p className="text-gray-700 text-[18px] leading-relaxed mb-4">
            “{item.message}”
          </p>
          <div className="flex items-center gap-3">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-left">
              <h4 className="text-[20px] font-[600] text-gray-900">{item.name}</h4>
              <p className="text-[16px] font-[500] text-gray-500">{item.company}</p>
            </div>
          </div>
        </div>
      ))}

      {/* ✅ View All / Show Less Button */}
      {testimonials.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 text-sm font-medium text-[#6609BE] border py-3 px-6 rounded-xl hover:text-indigo-700 transition"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      )}
    </div>
  )}
</section>

  );
}
