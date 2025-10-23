import React from "react";
import errorImg from "../assets/error-404.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <div className="flex justify-center items-center mb-4">
          <img src={errorImg} alt="" />
        </div>

        <h1 className="text-4xl font-bold text-[#001931] text-center mb-4">
          Oops, page not found!
        </h1>

        <p className="text-[#627382] text-[14px] md:text-base lg:text-base text-center">
          The page you are looking for is not available.
        </p>

        <div className="flex items-center justify-center mt-10">
          <Link to='/'
            className="btn w-[130px] h-[45px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px]"
          >
            <span className="text-white font-semibold">Go Back!</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
