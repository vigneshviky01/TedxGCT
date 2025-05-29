import React from "react";

const Team = () => {
  return (
    <section id="team" className="pt-24">
      <h1 className="font-impact text-5xl sm:text-6xl text-center text-white pt-5">
        MEET OUR TEAM
      </h1>
      <div className="Team-bg">
        <div className="w-full flex justify-center">

        <img src="/images/team/profSathya.png" className="max-h-[500px] object-contain"/>
        </div>
        <div>
          <h2 className="font-SpotifyMix font-extrabold text-[20px] sm:text-[24px] text-center text-white pt-5">
            CORE TEAM 2024-25
          </h2>
          <div className="always-visible-scrollbar pb-2 ">
            <div
              className="sm:hidden max-sm:min-w-max whitespace-nowrap inline-block"
            >
              <img src="/images/team/coreTeam.png" className="inline-block  max-sm:h-[350px] max-sm:w-full max-sm:object-fill" />
            </div>
            <div className="hidden sm:block">
              <img src="/images/team/coreTeamDesktop.png" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-SpotifyMix font-extrabold text-[20px] sm:text-[24px] text-center text-white pt-5">
            ORGANISING TEAM 2024-25
          </h2>
           <div className="max-sm:mt-[-40px] mt-[-20px] xl:mt-[-40px] always-visible-scrollbar pb-2">
            <div
              className="sm:hidden max-sm:min-w-max whitespace-nowrap inline-block"
            >
              <img src="/images/team/organisingTeam.png" className="inline-block  max-sm:h-[350px] max-sm:w-full max-sm:object-fill" />
            </div>
            <div className="hidden sm:block">
              <img src="/images/team/organisingTeamDesktop.png" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
