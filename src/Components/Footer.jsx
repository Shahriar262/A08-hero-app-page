import React from "react";
import logoImg from "../assets/logo.png";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-200 mt-13 py-8 px-4">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between max-w-7xl mx-auto items-start md:items-center gap-6 md:gap-0">
          {/* Logo & Description */}
         <div className="flex flex-col gap-2">
             <div className="flex gap-2 ">
            <img src={logoImg} className="w-7 h-7" alt="" />
            <h1 className="text-base font-bold text-white ">HERO.IO</h1>
          </div>
          <p className="text-sm text-gray-400">
            Experience the ultimate mobile productivity <br /> and entertainment app.
          </p>
         </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-20">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-white">Product</h2>
              <p className="text-gray-400 hover:text-white cursor-pointer text-sm">
                Features
              </p>
              <p className="text-gray-400 hover:text-white cursor-pointer text-sm">
                Pricing
              </p>
              <p className="text-gray-400 hover:text-white cursor-pointer text-sm">
                Updates
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-white">Company</h2>
              <p className="text-gray-400 hover:text-white cursor-pointer text-sm">
                About Us
              </p>
              <p className="text-gray-400 hover:text-white cursor-pointer  text-sm">
                Careers
              </p>
              <p className="text-gray-400 hover:text-white cursor-pointer text-sm">
                Contact
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-3 ">
            <h2 className="font-semibold text-white">Social Links</h2>
            <div className="flex gap-5">
              <span><FaFacebook /></span>
              <span><FaXTwitter /></span>
              <span><FaLinkedin /></span>
              <span><FaYoutube /></span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-white text-xs">
          &copy; 2025 HERO.IO. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
