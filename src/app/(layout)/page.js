"use client";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Range from "@/components/Range";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center">
        <Hero />
        <Range />
        <Products />
        <button className="border border-[#B88E2F] text-[#B88E2F] px-4 py-2 rounded hover:bg-[#B88E2F] hover:text-white transition ">
          See More
        </button>
      </div>
    </>
  );
}
