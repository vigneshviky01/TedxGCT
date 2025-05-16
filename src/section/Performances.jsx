import React from "react";
import performanceData from "../data/performanceData";
import PerformanceIndividual from "../components/Performance-Individual";
const Peformances = () => {
  return (
    <section className="px-5 sm:px-20  pt-24">
      <h1 className="font-impact text-5xl sm:text-6xl text-center text-white max-sm:mb-18 mb-28 xl:mb-24">
        PERFORMANCE
      </h1>
      <div className="flex max-xl:flex-col max-xl:gap-20 justify-around">
        {performanceData.map((item, index) => (
          <PerformanceIndividual key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Peformances;
