import React from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import UserChannels from "./UserChannels";
import DoughnutChart from "./DoughnutChart";

const Dashboard = () => {
  return (
    <div className="overflow-y">
      <div className="Dashboard w-screen pl-[6rem] pr-[23rem] overflow-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <LineChart />
          <BarChart />
        </div>
        <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
          <UserChannels />
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
