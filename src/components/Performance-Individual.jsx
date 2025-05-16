import React from 'react'

const PerformanceIndividual = ({name,desc,imgURL}) => {
  return (
    <div className="relative">
      <div className="overflow-hidden xl:w-[480px] flex flex-col items-center border border-border-red rounded-[31px]">
      <div className="absolute max-sm:top-[-70px] max-sm:underline max-sm:decoration-border-red max-sm:decoration-2 max-sm:underline-offset-8 top-[-65px] xl:top-[-38px]  sm:bg-black max-xl:px-5 xl:min-w-[400px]  text-center text-white font-SpotifyMix font-bold text-[20px] sm:text-3xl sm:border border-border-red rounded-[30px] xl:px-5"><p className="py-7 xl:py-5 text-wrap">{name}</p></div>
      <div className="mt-[-30px] w-full">
        <img src={imgURL} className="  xl:h-[365px] object-contain "/>
        <div className="performance-bg xl:mt-[-30px] xl:mb-[30px] w-full flex flex-col items-center">
      <p className="font-SpotifyMix text-white text-[20px] sm:text-3xl text-center py-3 pt-7 px-5">{desc}</p>
      <p className="font-SpotifyMix text-border-red text-[20px] sm:text-3xl text-center py-5 "><span className='cursor-pointer'>View Their Performance</span></p>
        </div>
      </div>
      </div>
      </div>
  )
}

export default PerformanceIndividual