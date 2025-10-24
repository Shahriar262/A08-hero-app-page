import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import AppsNotFoundPage from "./AppsNotFoundPage";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();

  const { apps, loading, error } = useApps();

  const app = apps.find((a) => a.id === Number(id));

  if (!app) {
    return (
      <div>
        <Navbar />
        <AppsNotFoundPage />
        <Footer />
      </div>
    );
  }

  if (loading) return <p>Loading...</p>;
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app || {};

  const verticalRatings = [...ratings].reverse();

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-10 mt-20">
        <div className="px-12 md:px-0">
          <img src={image} className="w-[280px] h-[280px]" alt="App image" />
        </div>

        <div>
          <h1 className="font-bold text-2xl mb-2">{title}</h1>

          <p className="font-medium mb-6 text-[#627382]">
            Developed by{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {companyName}
            </span>
          </p>

          <div className="shadow-3xl w-4xl h-[1px] mb-6 bg-gray-400/60"></div>

          <div className="flex flex-col md:flex-row items-center gap-15">
            <div>
              <img src={downloadImg} className="w-6 h-6" alt="" />
              <h1 className="text-[#001931] text-[14px] mt-2 mb-1">
                Downloads
              </h1>
              <p className="font-extrabold text-[#001931 text-[27px]">
                <span>{downloads}</span>M
              </p>
            </div>
            <div>
              <img src={ratingImg} className="w-6 h-6" alt="" />
              <h1 className="text-[#001931] text-[14px] mt-2 mb-1">
                Average Ratings
              </h1>
              <p className="font-extrabold text-[#001931 text-[27px]">
                <span>{ratingAvg}</span>
              </p>
            </div>
            <div>
              <img src={reviewImg} className="w-7 h-7" alt="" />
              <h1 className="text-[#001931] text-[14px] mt-2 mb-1">
                Total Reviews
              </h1>
              <p className="font-extrabold text-[#001931 text-[27px]">
                <span>{reviews}</span>K
              </p>
            </div>
          </div>
          <div className="mt-[26px] px-23 md:px-0">
            <button className="btn bg-[#00d390] text-white py-3 px-[18px] font-semibold">
              Install Now (<span>{size}</span> MB)
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mt-10 shadow-3xl bg-gray-400/60 w-[99.3%] h-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6">
        <h1 className="font-semibold text-[#001931] text-[21px] mb-4">
          Ratings
        </h1>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            responsive
            data={verticalRatings}
            layout="vertical"
            margin={{
              top: 10,
              right: 0,
              left: -30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" width={80} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="count"
              barSize={35}
              fill="#FF8811"
              activeBar={<Rectangle fill="#FF8811" stroke="" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mt-10 shadow-3xl bg-gray-400/60 w-full h-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6">
        <h1 className="font-semibold text-[#001931] text-[21px] mb-4">
          Description
        </h1>
        <p className="mt-4 text-[#627382] ">{description}</p>
      </div>

      <Footer />
    </div>
  );
};

export default AppDetails;
