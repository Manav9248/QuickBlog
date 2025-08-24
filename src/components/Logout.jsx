import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const iconData = [
    {
        id:0,
        image:assets.home_icon,
        name:"Dashboard",
        // navi:navigate("/admin/logout")
    },
    {
        id:1,
        image:assets.add_icon,
        name:"Add Blogs",
        // navi:navigate("/admin/addBlogs")
    },
    {
        id:2,
        image:assets.list_icon,
        name:"Add List",
        // navi:navigate("/admin/addList")
    },
    {
        id:3,
        image:assets.comment_icon,
        name:"Comments",
        // navi:navigate("/admin/comments")
    }
  ]

  return (
    <div>
      {/* Top navbar  */}
      <div className="flex justify-between pt-1 px-5 py-2 sm:pt-3 sm:px-10 md:py-5 border-b sm:py-4 text-gray-300 bg-white">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer w-2/5 sm:w-1/4 md:w-1/8"
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

      {/* Left navbar */}
      <div
        className="flex flex-col w-12 sm:w-18 md:w-54 gap-4 sm:gap-1 
         border-r h-screen items-center pl-2 sm:pl-hidden py-4 sm:py-hidden text-gray-300 bg-white"
      >
        {iconData.map((data)=>(
            <div 
             className="border-r border-purple-700 bg-purple-100/90 w-full" key={data.id}>
                <div className="flex sm:gap-4 sm:pl-5 sm:py-2 items-center cursor-pointer"
                >
                <img 
                 className="w-6" src={data.image} alt="icon" />
                <h6 className="hidden text-gray-900 md:block">{data.name}</h6>

                </div>
            </div>
        ))}
       
      </div>
    </div>
  );
};

export default Logout;
