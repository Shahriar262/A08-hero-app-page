import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import { CiSearch } from "react-icons/ci";
import AppsNotFoundPage from "./AppsNotFoundPage";
import LoadingSpinner from "../Components/LoadingSpinner";

const MyApps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    
    setSearchLoading(true);

    const timer = setTimeout(() => {
      setSearchLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [debouncedSearch]);

  const term = debouncedSearch.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  const appsNotFound = term !== "" && searchedApps.length === 0;

  

  return (
    <div>
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-[#001931] text-center mb-4">
          Our All Applications
        </h1>

        <p className="text-[#627382] text-[14px] md:text-base lg:text-base text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        {loading || searchLoading ? (
          <LoadingSpinner />
        ) : (
          <div>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 flex justify-between items-center mt-12">
              <h1 className="text-2xl -mb-2 font-semibold text-[#001931]">
                <span>({searchedApps.length})</span> Apps Found
              </h1>

              <label className="input flex items-center bg-transparent mb-2">
                <CiSearch />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  placeholder="search Apps"
                  className="text-[#627382]"
                />
              </label>
            </div>
            {appsNotFound ? (
              <AppsNotFoundPage
                onGoBack={() => setSearch("")}
                search={search}
                setSearch={setSearch}
                searchedApps={searchedApps}
              />
            ) : (
              <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
                {searchedApps.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApps;
