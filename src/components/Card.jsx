"use client";

import React from "react";
import cardImg from "@/assets/card.png";
import Link from "next/link";

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="flex flex-wrap gap-6 container mx-auto items-center justify-center">
      {data.products.map((el) => (
        <div
          key={el.id}
          className="w-[300px] border border-gray-200 rounded-lg overflow-hidden shadow-lg relative"
        >
          <Link href={`shop/${el.id}`}>
            <div className="h-[200px]">
              <img
                src={el.images[0]}
                alt=""
                className="w-full max-h-full object-contain"
              />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded-full">
                -30%
              </div>
            </div>
          </Link>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">{el.title}</h3>
            <p className="text-sm text-gray-500">{el.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-lg font-bold text-gray-900">{el.price}</p>
              <p className="text-sm text-gray-400 line-through">
                {el.discountedPrice}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
