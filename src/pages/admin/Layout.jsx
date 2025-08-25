import React from "react";
import { assets } from "../../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Top navbar  */}
      <div className="flex justify-between pt-1 px-5 py-2 sm:pt-3 sm:px-10 md:py-5 border-b sm:py-4 text-gray-300 bg-white">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer w-2/5 sm:w-1/4 md:w-2/8 lg:w-1/8"
          src={assets.logo}
          alt="logo"
        />
        <button
          onClick={() => navigate("/")}
          className="border outline-none  text-center rounded-4xl bg-indigo-600 tranistion-all hover:bg-indigo-700 text-white w-1/5 sm:w-1/4 md:w-1/10 cursor-pointer py-1.5"
        >
          Logout
        </button>
      </div>
    <div className="flex h-[calc(100vh-70px)]">
      <Sidebar/>
      <Outlet/>
    </div>
    </div>
  );
};

export default Layout;
