import React from 'react'

const Hero = () => {
  return (
    <section id="home" className='bg-black flex gap-[60px] flex-col justify-center heroBG py-[70px] sm:py-[130px]'>
        <div className='flex max-sm:gap-5 max-sm:flex-col-reverse xl:py-[50px] max-sm:items-center  justify-between px-[20px] md:px-[40px] xl:px-[60px]'>
            
            <div className='flex  items-start flex-col '>
                <img src="/images/HeroImgNew.png" className='max-sm:h-[100px] max-sm:w-[280px] max-xl:w-[320px] object-contain' />
                <p className='max-sm:hidden md:pl-4 xl:pl-10  font-SpotifyMix font-medium text-2xl xl:text-3xl text-white'>
                    29TH MARCH 2025
                </p>
                <div className='md:pl-4 xl:pl-10 sm:mt-5 flex max-sm:w-full justify-center sm:justify-start gap-5'>
                    <img src="/icons/Instagram.svg" className='max-xl:h-8 max-xl:w-8 cursor-pointer' alt="Icon"  />
                    <img src="/icons/Linkedin.svg" className='max-xl:h-8 max-xl:w-8 cursor-pointer' alt="Icon"  />
                </div>
            </div>
             <p className='sm:hidden   font-SpotifyMix font-medium text-xl text-white'>
                    29TH MARCH 2025
                </p>
            <img src="./images/FLICKER_TO_FLAME.png" className='max-sm:h-[200px] max-sm:w-[280px] max-xl:h-[230px] max-xl:w-[300px] object-contain'/>
        </div >
        <p className='w-full text-center font-SpotifyMix text-[20px] max-sm:px-7 sm:text-3xl text-white'>
            Thank you for making TEDxGCT<br className='max-sm:block hidden'/> a great success.<br />
See you next year!
        </p>
    </section>
  )
}

export default Hero