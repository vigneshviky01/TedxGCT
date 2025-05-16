import React from 'react'

const Partners = () => {
  return (
     <section id="partners" className="partner-bg pt-12 flex flex-col gap-3  items-center">
      <h1 className="font-impact text-5xl sm:text-6xl text-center text-white pt-5">
        OUR PARTNERS
      </h1>
        <h2 className="font-SpotifyMix font-extrabold text-[20px] sm:text-[24px] text-center text-white sm:pt-5">
            CO-SPONSORS
          </h2>
          <p className='py-5 max-sm:py-3  max-sm:px-5 px-16 max-w-[1200px] text-white font-SpotifyMix sm:text-3xl text-[20px]  text-justify sm:text-center'>
            We extend our heartfelt gratitude to our co-sponsors, 
GEMORION (An Indo- Japanese Joint Venture Company) and NUMAC-82, 
for their generous support in making TEDx a reality.
          </p>
          <div className='flex max-sm:flex-col max-sm:items-center gap-8 sm:gap-14'>
            <img src="/images/partnerImg1.png" className='max-w-[333px] h-[62px]'/>
            <img src="/images/partnerImg2.png" className='max-w-[300px] h-[62px]'/>
          </div>
           <h2 className="font-SpotifyMix font-extrabold text-[20px] sm:text-[24px] text-center text-white pt-5">
            ALUMNI SPONSORS
          </h2>
          <p className='py-5 max-sm:py-3  max-sm:px-5 px-16 max-w-[1200px] text-white font-SpotifyMix sm:text-3xl text-[20px]  text-justify sm:text-center'>
           A special and sincere thank you to our alumni, whose overwhelming
support and belief in our vision went far beyond sponsorship. 
Your contributions are a testament to the lasting bonds we share,
and this event stands stronger because of you.
          </p>
          <div className='flex max-sm:flex-col max-sm:items-center  sm:justify-around xl:w-4xl max-xl:gap-5'>
            <div className='flex flex-col gap-5 sm:gap-8 items-center max-sm:justify-between '>
                 <h2 className="font-SpotifyMix font-extrabold text-[20px] sm:text-[24px] text-center text-white pt-5">
            REFRESHMENT PARTNER
          </h2>
                      <img src="/images/partnerImg3.png" className='max-w-[136px] max-h-[136px]'/>

            </div>
            <div className='flex flex-col max-sm:justify-between  sm:gap-8 items-center '>
                 <h2 className="font-SpotifyMix font-extrabold text-[20px] sm:text-[24px] text-center text-white pt-5">
            PHOTOGRAPHY PARTNER
          </h2>
          <div className='flex h-[136px] items-center'>

                      <img src="/images/partnerImg4.png" className='max-sm:max-w-[250px] max-w-[304px] max-h-[92px]'/>
          </div>

            </div>
            
          </div>
          <p className='py-5 max-sm:py-3  max-sm:px-5 px-16 max-w-[900px] text-white font-SpotifyMix sm:text-3xl text-[20px]  text-justify sm:text-center sm:pt-10'>
         From fueling our minds and appetites to
freezing time through every perfect frame
Thank you for adding flavor and focus to TEDx.
          </p>
      </section>
  )
}

export default Partners