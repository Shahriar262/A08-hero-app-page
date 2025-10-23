import React from "react";
import { Link, useLoaderData } from "react-router";
import AppCard from "../Components/AppCard";

const Home = () => {
  const apps = useLoaderData();

  const trendingApps = apps.slice(0,8)
  
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold text-[#001931] text-center mb-4">
        Trending Apps
      </h1>
      <p className="text-[#627382] text-[14px] md:text-base lg:text-base text-center">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="max-w-7xl mx-auto px-4 md:px-7 lg:px-7 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {trendingApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <Link to='/apps' className="btn w-[130px] h-[45px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px]">
          <span className="text-white font-semibold">Show All</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
