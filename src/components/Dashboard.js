import React from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import DashboardStats from "./DashboardStats";
import UserChannels from "./UserChannels";
import DoughnutChart from "./DoughnutChart";
import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'
import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'


const statsData = [
  {
    title: "New Users",
    value: "34.7k",
    icon: <UserGroupIcon className="w-8 h-8" />,
    description: "↗︎ 2300 (22%)",
  },
  {
    title: "Total Sales",
    value: "$34,545",
    icon: <CreditCardIcon className="w-8 h-8" />,
    description: "Current month",
  },
  {
    title: "Pending Leads",
    value: "450",
    icon: <CircleStackIcon className="w-8 h-8" />,
    description: "50 in hot leads",
  },
  {
    title: "Active Users",
    value: "5.6k",
    icon: <UsersIcon className="w-8 h-8" />,
    description: "↙ 300 (18%)",
  },
];

const Dashboard = () => {
  return (
    <>
      {/* <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6 overflow-auto">
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} colorIndex={k} />;
        })}
      </div> */}
      <div className="Dashboard bg-base-100 h-screen w-screen pl-[6rem] pr-[23rem]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <LineChart />
          <BarChart />
        </div>
        <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <UserChannels />
                <DoughnutChart />
            </div>
      </div>
    </>
  );
};

export default Dashboard;
