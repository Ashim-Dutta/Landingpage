import React from "react";
import { FaTwitter, FaDiscord, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#120023] text-gray-300  flex items-center gap-[10px] self-stretch
    px-[16px] pt-[36px] pb-[56px]
    lg:flex-col lg:items-start
    lg:px-[80px] lg:pt-[64px] lg:pb-[96px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[76px]">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-3 h-[32px] w-[148px]">
              <img src="Frame.svg" alt="Logo" className="w-full h-full" />
          </div>
          <p className="text-sm leading-relaxed mb-4">
            The #1 preferred way to build and distribute a modern-day internet business.
          </p>
          <div className="flex items-center gap-4 text-lg">
            <a href="#" className="hover:text-purple-400"><FaTwitter /></a>
            <a href="#" className="hover:text-purple-400"><FaDiscord /></a>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-[#808080] font-[14px] text-lg mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span>Pricing</span>
            </li>
            <li className="flex items-center gap-2">
              <span>Contact Us</span>
            </li>
            <li className="flex items-center gap-2">
              <span>Check-in</span>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-[#808080] font-[14px] text-lg mb-3">Contact Us</h3>
          <ul className="space-y-5 text-sm">
            {/* <li className="flex items-center gap-[16px]">
              <FaMapMarkerAlt className="text-white w-[15px] h-[18px]" />
              <span>123 Hospitality Lane, San Francisco, CA 94107</span>
            </li> */}
            <li className="flex items-center gap-[16px]">
              <FaPhoneAlt className="text-white w-[15px] h-[18px]" />
              <span>+91 9258424155</span>
            </li>
            <li className="flex items-center gap-[16px]">
  <FaEnvelope className="text-white w-[15px] h-[18px]" />
  <a
    href="mailto:support@digistay.ai"
    className="text-white hover:underline"
  >
    support@digistay.ai
  </a>
</li>

          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-[#808080] font-[14px] text-lg mb-3">Subscribe to Our Newsletter</h3>
          <p className="text-sm mb-4">
            Stay updated with our latest Features & Releases
          </p>
          <form className="flex flex-row items-stretch gap-3">
  <input
    type="email"
    placeholder="Your Email"
    className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white w-[209px] h-[48px]"
  />
  
  <button
    type="submit"
    className="cursor-pointer flex justify-center items-center gap-[10px] px-6 py-3 
               rounded-[8px] border border-white 
               bg-[linear-gradient(92deg,_#9C38FA_4.65%,_#6609BE_91.32%)] 
               shadow-[inset_-4px_0_4px_rgba(0,0,0,0.25),_inset_0_4px_4px_rgba(0,0,0,0.25),_0_4px_8px_rgba(0,0,0,0.24)] 
               text-white font-medium transition-all duration-300 hover:opacity-90"
  >
    Subscribe
  </button>
</form>

        </div>
      </div>

    </footer>
  );
}
