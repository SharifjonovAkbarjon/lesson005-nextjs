import Card from "@/components/Card";
import Filter from "@/components/Filter";
import SLider from "@/components/Slider";
import React from "react";

const Shop = () => {
  return (
    <div className="bg-white">
      <SLider title={"Shop"} subtitle={"Shop"} />
      <Filter />
      <div className="flex items-center justify-center gap-6 pb-8">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Shop;
