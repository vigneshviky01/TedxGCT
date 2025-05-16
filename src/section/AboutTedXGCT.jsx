import React from "react";

const AboutTedXGCT = () => {
  return (
    <section className="bg-black px-5 sm:px-20 max-sm:mt-8 pt-32 sm:pt-24 relative">
        <img src="/images/GCT.png" className="block md:hidden absolute top-3 left-1/2 -translate-x-1/2   h-[126px] w-[200px] "/>

      <div className="AbtTedXGCT-BG sm:px-10 px-5 pb-10 border border-border-red rounded-4xl flex max-sm:items-center items-end flex-col sm:gap-10 gap-6 ">
        <div className="mt-[-25px] bg-black max-w-min font-impact px-[60px] py-3 text-4xl border rounded-4xl border-border-red text-white text-center z-10">
          ABOUT TEDxGCT
        </div>
        <div className="xl:mb-[-180px]">
            <img src="/images/GCT.png" className="hidden xl:block float-right h-[326px] w-[590px] relative xl:top-[-160px] xl:right-[-45px]"/>
        <p className="text-white font-SpotifyMix text-[20px] sm:text-3xl text-justify sm:relative xl:top-[-40px]">
          TEDxGCT is our way of bringing that magic to the heart of Government
          College of Technology, Coimbatore. We’re a team of students driven by
          the simple belief that ideas have the power to shape the future.
        </p>
        </div>
        <p className="text-white font-SpotifyMix text-[20px] sm:text-3xl text-justify">
          At TEDxGCT, we don’t just host talks—we create moments. Moments that
          challenge perspectives, ignite curiosity, and connect people who might
          never have crossed paths otherwise. Our speakers come from all walks
          of life—visionaries, creators, changemakers—each with a story worth
          sharing and a lesson worth learning.
        </p>
        <p className="text-white font-SpotifyMix text-[20px] sm:text-3xl text-justify">
          This is more than an event. It’s a celebration of ideas, a platform
          for voices that need to be heard, and a spark for something bigger.
          Welcome to TEDxGCT—where ideas meet impact.
        </p>
       
      </div>
    </section>
  );
};

export default AboutTedXGCT;
