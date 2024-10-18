import React from "react";

import img1 from "@/assets/range1.png";
import img2 from "@/assets/range2.png";
import img3 from "@/assets/range3.png";
import Image from "next/image";

const Range = () => {
  return (
    <section className="wrapper range container mx-auto pb-[30px]">
      <div className="range__info text-center my-12">
        <h3 className="text-2xl font-bold text-black">Browse The Range</h3>
        <p className="text-[#000]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="ranges flex items-center justify-between text-center font-semibold gap-4 overflow-x-auto">
        <div className="ranges--item max-w-[24rem] grid gap-5 flex-shrink-0 flex-grow">
          <Image src={img1} alt="category-img" width={300} height={300} />
          <p className="text-black">Dining</p>
        </div>
        <div className="ranges--item max-w-[24rem] grid gap-5 flex-shrink-0 flex-grow">
          <Image src={img2} alt="category-img" width={300} height={300} />
          <p className="text-black">Living</p>
        </div>
        <div className="ranges--item max-w-[24rem] grid gap-5 flex-shrink-0 flex-grow">
          <Image src={img3} alt="category-img" width={300} height={300} />
          <p className="text-black">Bedroom</p>
        </div>
      </div>
    </section>
  );
};

export default Range;
