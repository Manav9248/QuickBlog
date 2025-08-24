import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Moment from "moment";

const Blog = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  //function
  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        className="absolute -top-50 -z-1 opacity-50"
        alt=""
      />
      <Navbar />
      <div className="flex flex-col justify-center mt-18 mb-10 items-center gap-3">
        <p className="text-indigo-800 font-medium text-[1.1rem]">
          {/* for converting data and time in redable form use moment package from npm */}
          Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
        </p>
        <h1 className="font-semibold text-5xl text-center leading-[3rem] sm:w-4/5 lg:w-2/4 opacity-80">{data.title}</h1>
        <p className="text-gray-500 my-2">{data.subTitle}</p>
        <p className="border border-indigo-600 rounded-2xl text-center px-4 py-1 text-indigo-800 bg-purple-100/50 text-sm">Michael Brown</p>
        <img className="rounded-4xl mt-8  text-center sm:w-10/11 lg:w-4/6 xl:w-6/8" src={data.image} alt="image" />
        <p className="p-5"
        dangerouslySetInnerHTML={{"__html": data.description}}>
        </p>
      </div>

      {/* comment section */}
      <div className="my-8">
    <p className="font-bold ml-5">Comments (0)</p>
    <p className="font-bold ml-5 mt-10">Add your comment</p>
    <form className="ml-5 mt-4 flex flex-col">
      <input type="text" 
      className="border outline-none border-gray-300 rounded p-2 sm:w-3/4 md:w-1/4"
      placeholder="Name"
      required/>
      <textarea type="text" className="border mt-5 w-3/4 h-[10rem] md:w-1/4 p-2 border-gray-300 rounded outline-none" required placeholder="Comment"></textarea>
      <div className="mt-5">
      <button className="border-none py-2 px-6 bg-indigo-500 text-center rounded text-white text-md transition-all hover:scale-105" type="submit">Submit</button>
      </div>
    </form>
    <div className="m-5 my-[5rem]">
      <h1 className="text-md font-semibold">Share this article on social media</h1>
      <div className="flex mt-3">
        <img src={assets.facebook_icon} alt="favicon" />
        <img src={assets.twitter_icon} alt="twitter" />
        <img src={assets.googleplus_icon}  alt="google" />
      </div>
    </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Blog;
