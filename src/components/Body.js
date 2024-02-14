import React from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
const Body = () => {
  return (
    <div className="bg-base-100 h-screen w-screen pl-[6rem] pr-[23rem]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <LineChart />
        <BarChart />
      </div>
    </div>
  );
};

export default Body;
