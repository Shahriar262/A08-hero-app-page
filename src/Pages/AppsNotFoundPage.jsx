import React from "react";
import noAppsImg from "../assets/App-Error.png";


const AppsNotFoundPage = ({ onGoBack }) => {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center mb-4">
        <img src={noAppsImg} alt="" />
      </div>

      <h1 className="text-4xl font-bold text-[#001931] text-center mb-4">
        OPPS!! APP NOT FOUND
      </h1>

      <p className="text-[#627382] text-[14px] md:text-base lg:text-base text-center">
        The App you are requesting is not found on our system. please try
        another apps
      </p>

      <div className="flex items-center justify-center mt-10">
        <button
          onClick={onGoBack}
          className="btn w-[130px] h-[45px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px]"
        >
          <span className="text-white font-semibold">Go Back!</span>
        </button>
      </div>
    </div>
  );
};

export default AppsNotFoundPage;
