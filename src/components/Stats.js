import React from "react";
import Premium from "./Premium";
import AmountStats from "./AmountStats";
import PageStats from "./PageStats";

const Stats = () => {
  return (
    <div>
      <section className="fixed bg-slate-100 h-screen right-0 w-80 overflow-auto">
        <div className="grid lg:grid-cols-1 mt-10 grid-cols-1 gap-6 p-4">
          <AmountStats />
          <PageStats />
          <Premium />
        </div>
      </section>
    </div>
  );
};

export default Stats;
