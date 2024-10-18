import React from "react";
import img from "@/assets/blog.png"; // Correctly importing the image
import { GoSearch } from "react-icons/go";

const Blog = () => {
  return (
    <div className="  bg-white">
      <div className="flex justify-between mx-auto container">
        <div className="w-[600px] flex items-center justify-center  mx-auto">
          <img src={img.src} alt="Blog" className="w-full h-auto" />{" "}
        </div>
        <div className="p-[20px]">
          <div className="w-[311px] h-[58px] border rounded-[4px] flex items-center">
            <input
              className="w-[90%] h-full border-none outline-none pl-2"
              type="text"
            />
            <GoSearch />
          </div>
          <div>
            <p className="text-[24px] font-[500] text-[#000] text-center mt-[25px] mb-[20px]">
              Categories
            </p>
            <div className="flex flex-col gap-[41px]">
              <div className="flex items-center justify-between">
                <p className="text-[#9F9F9F]">Crafts</p>
                <p className="text-[#9F9F9F]">2</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#9F9F9F]">Design</p>
                <p className="text-[#9F9F9F]">8</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#9F9F9F]">Handmade</p>
                <p className="text-[#9F9F9F]">7</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#9F9F9F]">Interior</p>
                <p className="text-[#9F9F9F]">1</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#9F9F9F]">Wood</p>
                <p className="text-[#9F9F9F]">6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
