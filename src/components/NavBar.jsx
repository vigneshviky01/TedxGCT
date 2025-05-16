import React from 'react'
import navBarData from '../data/navBarData'
const NavBar = () => {
  return (
    <nav className='bg-black w-full flex md:flex-col md:gap-5 xl:flex-row justify-between px-[40px] py-5'>
        <img src="/logo/logo.png" className='h-[94px] w-[260px]'/>
        <div className='hidden md:flex gap-[40px] items-center'>
{navBarData.map((item, index)=>(<p key={index} className='font-SpotifyMix  text-3xl text-white'><a href={`#${item.toLowerCase()}`} >{item}</a></p>))}
        </div>
    </nav>
    
  )
}

export default NavBar