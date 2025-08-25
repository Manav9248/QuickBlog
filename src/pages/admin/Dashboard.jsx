import React from "react";
import { assets } from "../../assets/assets";

const Dashboard = () => {
  return (
    <div className="bg-blue-50/50 flex-1 p-4 md:p-10">
      {/* Top container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0 lg:w-5/6 w-2/4 sm:w-3/4">
        <div className="border border-white shadow sm:w-full md:w-4/4 lg:w-3/4 h-full rounded bg-white flex items-center ">
          <img
            src={assets.dashboard_icon_1}
            className="border border-blue-50/50 w-2/7  m-5"
            alt=""
          />
          <div className="">
            <p className="font-semibold text-xl">10</p>
            <p className="mt-0.5 text-gray-400/100 font-light">Blogs</p>
          </div>
        </div>

        <div className="border border-white shadow sm:w-full md:w-4/4 lg:w-3/4 h-full rounded bg-white flex items-center">
          <img
            src={assets.dashboard_icon_2}
            className="border border-blue-50/50 w-2/7  m-5"
            alt=""
          />
          <div className="">
            <p className="font-semibold text-xl">2</p>
            <p className="mt-0.5 text-gray-400/100 font-light">Comments</p>
          </div>
        </div>

        <div className="border border-white shadow sm:w-full md:w-4/4 lg:w-3/4  rounded bg-white flex items-center">
          <img
            src={assets.dashboard_icon_3}
            className="border border-blue-50/50 w-2/7 m-5"
            alt=""
          />
          <div className="">
            <p className="font-semibold text-xl">0</p>
            <p className="mt-0.5 text-gray-400/100 font-light">Drafts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
