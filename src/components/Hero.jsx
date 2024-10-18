import React from "react";
import heroImg from "@/assets/heroBg.png";

const Hero = () => {
  return (
    <div className="relative w-full">
      <div>
        <div>
          <img
            src={heroImg.src}
            alt="Hero background"
            className="w-full h-auto bg-cover"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-[220px] border p-[39px] bg-[#FFF3E3] rounded-[10px]">
          <div className="flex flex-col gap-4">
            <p className="text-[14px] lg:text-[16px] font-[600] text-[#333333]">
              New Arrival
            </p>
            <p className="text-[#B88E2F] leading-[65px] text-[24px] lg:w-[429px] w-full sm:text-[30px] md:text-[38px] lg:text-[48px] lg:font-[700] font-[600]">
              Discover Our New Collection
            </p>
            <p className="text-[14px] lg:w-[469px] w-full lg:text-[16px] font-[600] text-[#333333]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              provident alias autem vel!
            </p>
            <button className="w-[200px] h-[60px] bg-[#B88E2F] text-white rounded-[5px]">
              BUY NOw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
