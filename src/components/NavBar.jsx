import React from 'react'
import navBarData from '../data/navBarData'
const NavBar = () => {
  return (
    <nav className=' w-full flex md:flex-col md:gap-5 xl:flex-row justify-between px-[40px] py-5'>
      <div>

        <img src="/logo/TedLogo.png" className='h-[80px]  bg-transparent'/>
        <p className='mt-[-15px] pl-3 text-white text-[15px] font-medium font-helvetica'><span className='text-[#eb0027] '>X</span> = independently organized TED event</p>
      </div>
        <div className='hidden md:flex gap-[40px] items-center'>
{navBarData.map((item, index)=>(<p key={index} className='font-SpotifyMix  text-3xl text-white'><a href={`#${item.toLowerCase()}`} >{item}</a></p>))}
        </div>
    </nav>
    
  )
}

export default NavBar