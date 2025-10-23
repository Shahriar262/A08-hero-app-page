import React from "react";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;
  

  return (
    <div className="bg-[#FFFFFF] h-[380px]  w-full p-[10px] rounded-[4px] shadow-sm hover:scale-105 transition ease-in-out">
      <img src={image} className="w-full h-[270px] rounded-[8px]" alt="" />
      <h1 className="font-medium text-[#001931] my-4">{title}</h1>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[5px] bg-[#F1F5E8] p-1 rounded-[6px]">
          <img src={downloadImg} className="w-[12px] h-[12px]" alt="" />
          <p className="text-[#00D390] text-[12px]">
            <span>{downloads}</span>M
          </p>
        </div>

        <div className="flex items-center gap-[5px] bg-[#FFF0E1] p-1 rounded-[6px]">
          <img src={ratingImg} className="w-[11px] h-[11px]" alt="" />
          <p className="text-[#FF8811] text-[13px]">{ratingAvg}</p>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
