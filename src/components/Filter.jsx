import React from "react";
import { BsFillGridFill, BsViewList } from "react-icons/bs";
import { VscFilter } from "react-icons/vsc";

const Filter = () => {
  return (
    <div className="bg-[#F9F1E7] py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex gap-6 items-center">
            {/* Filter Icon and Text */}
            <div className="flex gap-2 items-center text-[#333] font-semibold">
              <VscFilter className="text-xl" />
              <span>Filter</span>
            </div>
            {/* Grid and List View Icons */}
            <div className="flex gap-3 items-center">
              <BsFillGridFill className="text-xl text-[#555] cursor-pointer hover:text-[#000]" />
              <BsViewList className="text-xl text-[#555] cursor-pointer hover:text-[#000]" />
            </div>
            <div className="w-[1px] h-[30px] bg-gray-500" />
            <p className="text-[#000] font-medium">
              Showing 1–16 of 32 results
            </p>
          </div>
          {/* Show and Sort By Section */}
          <div className="flex gap-6 items-center">
            {/* Show Section */}
            <div className="flex gap-2 items-center">
              <p className="text-[#333] font-medium">Show</p>
              <button className="w-[55px] h-[50px] bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none">
                16
              </button>
            </div>
            {/* Sort By Section */}
            <div className="flex gap-2 items-center">
              <p className="text-[#333] font-medium">Sort by</p>
              <button className="w-[188px] h-[50px] bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none">
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
