import React from "react";
import playStore from "../assets/playStore-logo.png";
import appStore from "../assets/appStore-logo.png";

const Banner = () => {
  return (
    <div className="mt-[80px]">
      <h1 className="text-[40px] md:text-5xl text-[#001931] font-bold  text-center mb-5">
        We Build <br />{" "}
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>

      <p className="text-[#627382] text-[14px] md:text-base text-center mb-5">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>

      <div className="flex justify-center items-center gap-[10px]">
        <button
          onClick={() => window.open("https://play.google.com/", "_blank")}
          className="btn rounded-[4px] bg-[#E9E9E9] border-3 border-[#D2D2D2] p-4"
        >
          <div className="flex items-center gap-[6px]">
            <div>
              <img src={playStore} className="w-7 h-7" alt="" />
            </div>
            <span>Google Play</span>
          </div>
        </button>
        <button
          onClick={() =>
            window.open("https://www.apple.com/app-store/", "_blank")
          }
          className="btn rounded-[4px] bg-[#E9E9E9] border-3 border-[#D2D2D2] p-4"
        >
          <div className="flex items-center gap-[6px]">
            <div>
              <img src={appStore} className="w-7 h-7" alt="" />
            </div>
            <span>App Store</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Banner;
