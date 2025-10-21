'use client'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Button animation
  const buttonFloatVariant = {
    animate: {
      y: [0, -4, 0],
      backgroundPosition: ["0% 50%", "100% 50%"],
      transition: {
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" },
      },
    },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  // Mobile menu animation
  const menuVariant = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const scrollToDemo = () => {
    const section = document.getElementById("demo");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Digistay Logo" className="w-36 sm:w-40" />
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <motion.button
            onClick={scrollToDemo}
              variants={buttonFloatVariant}
              initial="animate"
              animate="animate"
              whileHover="whileHover"
              whileTap="whileTap"
              className="px-8 py-3 bg-gradient-to-r from-[#6609BE] to-[#2F0458] text-white font-semibold rounded-xl hover:from-[#7C0DDE] hover:to-[#3F0568] transition-colors cursor-pointer bg-[length:200%_200%]"
            >
              Get a Demo
            </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="mobile-menu"
                variants={menuVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute top-[4.5rem] right-4 bg-white shadow-xl border border-gray-100 rounded-xl p-3 w-52"
              >
                <motion.button
                  variants={buttonFloatVariant}
                  initial="animate"
                  animate="animate"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#6609BE] to-[#2F0458] text-white font-semibold rounded-xl hover:from-[#7C0DDE] hover:to-[#3F0568] transition-all shadow-md hover:shadow-lg bg-[length:200%_200%]"
                >
                  Get a Demo
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
