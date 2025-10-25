import React, { useState } from "react";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import { loadAppList, removeFromInstallation } from "../utils/localStorage";
import { toast, ToastContainer } from "react-toastify";
import useApps from "../Hooks/useApps";
import LoadingSpinner from "../Components/LoadingSpinner";

const MyInstallation = () => {
  const { loading } = useApps();
  const [appList, setAppList] = useState(() => loadAppList());
  const [sortOrder, setSortOrder] = useState("none");

  const sortedItem = (() => {
    if (sortOrder === "downloads-asc") {
      return [...appList].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "downloads-desc") {
      return [...appList].sort((a, b) => b.downloads - a.downloads);
    } else {
      return appList;
    }
  })();

  const handleRemove = (app) => {
    // remove from local storage
    removeFromInstallation(app.id);

    // ui update
    setAppList((prev) => prev.filter((p) => p.id !== app.id));

    toast.success(`${app.title} Uninstalled`);
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={2000} />
      <h1 className="text-4xl font-bold text-[#001931] text-center mt-20 mb-4">
        Your Installed Apps
      </h1>
      <p className="text-[#627382] text-[14px] md:text-base lg:text-base text-center">
        Explore All Trending Apps on the Market developed by us
      </p>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="space-y-7 max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex justify-between mt-14 mb-[10px] items-center">
              <h1 className="text-2xl font-semibold">
                <span>{sortedItem.length}</span> Apps Found
              </h1>

              <label className="form-control w-full mb-2 max-w-xs">
                <select
                  className="select select-bordered bg-[#E9E9E9] font-medium text-[#627382]"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="none">Sort By Downloads</option>
                  <option value="downloads-asc">Low-&gt;High</option>
                  <option value="downloads-desc">High-&gt;Low</option>
                </select>
              </label>
            </div>
            <div className="space-y-3">
              {sortedItem.map((p) => (
                <div key={p.id} className="card p-3 bg-white rounded-[4px]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <div>
                        <img
                          src={p.image}
                          className="w-[60px] h-[60px] rounded-[8px]"
                          alt={p.title}
                        />
                      </div>
                      <div>
                        <h2 className="text-[#001931] font-medium mb-2">
                          {p.title}
                        </h2>
                        <div className="flex items-center gap-[10px]">
                          <div className="flex items-center gap-[5px]">
                            <img
                              src={downloadImg}
                              className="w-[11px] h-[11px]"
                              alt=""
                            />
                            <p className="text-[#00D390] text-[12px]">
                              <span>{p.downloads}</span>M
                            </p>
                          </div>

                          <div className="flex items-center gap-[5px]">
                            <img
                              src={ratingImg}
                              className="w-[10px] h-[10px]"
                              alt=""
                            />
                            <p className="text-[#FF8811] text-[12px]">
                              {p.ratingAvg}
                            </p>
                          </div>
                          <div className="text-[12px] text-[#627382]">
                            <span>{p.size}</span> MB
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={() => handleRemove(p)}
                        className="btn bg-[#00d390] text-white py-3 px-[18px] font-semibold"
                      >
                        Uninstall
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyInstallation;
