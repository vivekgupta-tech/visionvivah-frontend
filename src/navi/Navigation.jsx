import React from 'react'
import Navbar from './Navbar'

function Navigation() {
  return (
    <>
    <div className='fixed w-[100%]  z-1 '>
    
    <div className=' text-white w-[100%] font-semibold    ' style={{backgroundColor: "var(--red)"}}>
        <marquee behavior="left" direction="">Do not Post Job and Promotional Queries</marquee>
    </div>

    < Navbar  />
    <div className=' text-white w-[100%] font-semibold  ' style={{backgroundColor: "var(--blue)"}}>
        <marquee behavior="left" direction="">We have certified Event Management Team</marquee>
    </div>
    </div>
 
   </>
  )
}

export default Navigation