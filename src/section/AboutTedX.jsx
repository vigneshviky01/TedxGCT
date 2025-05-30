import React from "react";

const AboutTedX = () => {
  return (
    <section id="about" className="bg-black px-5 sm:px-20 mt-[30px] xl:mt-[80px] ">
      <div className="AbtTedX-BG sm:px-10 px-5 border border-border-red rounded-4xl flex max-sm:items-center flex-col sm:gap-10 gap-6 ">
        <div className="mt-[-25px] bg-black max-w-min font-impact px-[60px] py-3 text-4xl border rounded-4xl border-border-red text-white text-center">
          ABOUT TEDx
        </div>
        <p className="text-white font-SpotifyMix text-[20px] sm:text-3xl text-justify">
          TEDx is more than just a stage or a talk,it's a movement powered by
          curiosity, passion, and the belief that one idea can spark a thousand
          more. Born out of TED’s mission to spread ideas that matter, TEDx
          events are locally organized experiences that bring people together to
          explore powerful talks, meaningful conversations, and fresh
          perspectives.
        </p>
        <p className="text-white font-SpotifyMix text-[20px] sm:text-3xl text-justify">
          Each TEDx event is independently organized by passionate individuals
          who believe in the magic of ideas. Whether it's through inspiring
          speakers, thought-provoking videos, or community discussions, TEDx is
          about creating a space where big ideas come to life—and often, change
          lives.
        </p>
        <p className="text-border-red font-SpotifyMix text-[20px] sm:text-3xl text-center pb-7 mt-[-20px] "><a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank">Explore</a></p>
      </div>
    </section>
  );
};

export default AboutTedX;
