import React from "react";

const Speaker = ({name,position,imgURL,right}) => {
  return (
    <div className="w-full flex justify-center">
    <div className="relative   sm:px-20 max-w-7xl flex flex-col-reverse xl:flex-row   items-center justify-center xl:justify-end ">
      <div className={`speakerMobile max-sm:min-w-[350px] max-md:w-[380px] max-xl:max-w-[460px] max-xl:min-w-[480px]  max-xl:px-5 xl:ml-48   xl:mr-34 flex flex-col max-xl:gap-3 max-sm:gap-1 ${right ? "xl:items-start " : "xl:items-end "}  `}>
        <p className={`xl:mt-[5px] xl:min-w-[478px] ${right ? "xl:ml-20" : "xl:mr-24"} px-5 max-xl:py-3 max-xl:border max-xl:border-border-red max-xl:rounded-4xl max-xl:bg-transparent xl:py-6 xl:absolute rounded-4xl text-center font-SpotifyMix font-bold text-2xl sm:text-3xl text-white xl:border xl:border-border-red bg-black`}>
          {name}
        </p>
        <div className={`xl:min-h-[175px] xl:py-8 xl:pb-10 xl:pt-12 xl:mt-12  ${right? "xl:pr-24": "xl:pl-28 "} xl:min-w-[803px] rounded-4xl text-center font-SpotifyMix text-[20px] sm:text-3xl xl:leading-10 text-white xl:border xl:border-border-red`}>
        <div className="mt-2"><span className="xl:block xl:w-[690px]" dangerouslySetInnerHTML={{ __html: position }} /></div>
        </div>
                <p className={`font-SpotifyMix max-xl:py-4 max-md:pt-4 max-xl:pt-7 xl:mt-[-50px] xl:mb-4 ${right ? "xl:pr-36" :"xl:pr-10"} w-full text-center xl:text-end text-[20px] sm:text-3xl text-border-red cursor-pointer z-30 xl:pt-3 `}>View Talk</p>

      </div>
      <img src={imgURL} className= {`xl:absolute ${right ?"xl:right-[18px]": "xl:left-14" }  max-sm:h-[300px] max-sm:w-full h-[350px] w-[350px] z-10 object-contain`} />
  <img src={`${right?"/images/speakerRightFrame.png" : "/images/speakerLeftFrame.png"}`} className={`max-xl:hidden h-[174px] absolute ${right?"right-[130px]":"left-[240px]"} top-[50px] z-[-100]`}/>
    </div>
    </div>
  );
};

export default Speaker;
