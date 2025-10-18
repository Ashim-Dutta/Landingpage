'use client'
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/checkin.png",
    title: "Instant Easy Check-ins",
    description:
      "With the best hotel automation software, say goodbye to long queues and paperwork. Guests check in within seconds.",
  },
  {
    icon: "/rocket.png",
    title: "Boost Bookings Automatically",
    description: "Streamline your OTA operations to boost your bookings.",
  },
  {
    icon: "/whatsapp.png",
    title: "Seamless WhatsApp Integration",
    description: "Stay connected with guests on the app they already love.",
  },
  {
    icon: "/cart.png",
    title: "Smart Upselling",
    description:
      "Increase revenue effortlessly by offering the right upgrades and add-ons at the perfect time.",
  },
  {
    icon: "/food-order.png",
    title: "Quick Food Ordering",
    description:
      "Guests can place orders instantly through a simple QR code scan.",
  },
  {
    icon: "/guest-app.png",
    title: "Guest App",
    description:
      "AI PMS software gives your guests full control with a user-friendly app for bookings, check-ins, and requests.",
  },
  {
    icon: "/business.png",
    title: "Business Intelligence",
    description:
      "Unlock powerful insights with real-time dashboards and analytics to make smarter, data-driven decisions.",
  },
  {
    icon: "/pricing.png",
    title: "AI Pricing",
    description:
      "Smart AI adjusts your rates instantly based on real-time market conditions, ensuring higher revenue.",
  },
  {
    icon: "/billing.png",
    title: "Easy Billing and GST",
    description:
      "Simplify operations with automated billing, accurate GST calculations, and hassle-free invoicing.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const WhyChooseDigiStay = () => {
  return (
    <section className="py-20 bg-white text-center px-6 md:px-10 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-[28px] md:text-[40px] font-[700]"
          variants={itemVariants}
        >
          Why Hoteliers Choose DigiStay?
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="font-[400] text-[18px] md:text-[20px] text-[#636363] w-[358px] md:w-[647px]  mx-auto mt-6"
          variants={itemVariants}
        >
          Your all-in-one AI in the hotel industry for smarter, faster,
          stress-free hotel management.
        </motion.p>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="px-[28px] py-[36px] border border-gray-200 rounded-xl bg-[#FAFAFA] text-left space-y-1.5"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10 mb-4"
              />
              <h3 className="text-[1.5rem] font-[600]">{feature.title}</h3>
              <p className="text-[1rem] font-[400] text-[#484848] mt-3">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseDigiStay;
