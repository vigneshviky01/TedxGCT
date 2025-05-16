import React from "react";
import speakersData from "../data/speakersData";
import Speaker from "../components/Speaker";
const Speakers = () => {
  return (
    <section id="speakers" className="px-5 sm:px-20  pt-24">
      <h1 className="font-impact text-5xl sm:text-6xl text-center text-white">
        OUR SPEAKERS
      </h1>
      <div className="mt-6 sm:mt-20 flex flex-col   gap-10 sm:gap-36">
        {speakersData.map((item, index) => (
          <Speaker key={index} {...item} />
        ))}
      </div>
      {/* <Speaker name="SINCHU RAJU" position="Founder & CMO of <br />
Chillipixel Creations" imgURL={"/images/speakers/sinchhu.png"} right={false}/> */}
    </section>
  );
};

export default Speakers;
