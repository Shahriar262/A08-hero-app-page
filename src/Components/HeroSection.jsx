import React from "react";
import heroImg from "../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-center items-center">
        <img src={heroImg} className="px-8 md:px-0" alt="" />
      </div>
      
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
        <h1 className="pt-[70px] text-[28px] md:text-4xl text-white text-center font-bold">
          Trusted by Millions, Built for You
        </h1>

        <section className="mt-12 md:mt-10 pb-[70px] flex flex-col md:flex-row items-center justify-center gap-[70px] md:gap-[140px]">

          <div className="text-center">
            <h4 className="text-gray-300 text-[12px]">Total Downloads</h4>
            <p className="text-4xl text-white font-bold my-4">29.6M</p>
            <p className="text-gray-300 text-[12px]">
              21% more than last month
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-gray-300 text-[12px]">Total Reviews</h4>
            <p className="text-4xl text-white font-bold my-4">906K</p>
            <p className="text-gray-300 text-[12px]">
              46% more than last month
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-gray-300 text-[12px]">Active Apps</h4>
            <p className="text-4xl text-white font-bold my-4">132+</p>
            <p className="text-gray-300 text-[12px]">31 more will Launch</p>
          </div>

        </section>
      </div>
    </div>
  );
};

export default HeroSection;
