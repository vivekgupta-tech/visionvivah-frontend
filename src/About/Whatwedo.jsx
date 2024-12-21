import React from 'react'
import { MdAcUnit } from "react-icons/md";
function Whatwedo() {
  return (
    <>
    <div className='mt-[66vh]'>
 <h1 className='destination-titles  font-extrabold text-center mt-24 text-5xl'>What We do</h1>

 <div className='flex'>
 <p className=' ml-[44.5%] w-32 border-2 border-red-600 mt-4'></p>
 <p className='border-2 ml-1 w-1 border-black mt-4'></p>
 <p className='border-2 w-1 ml-1 border-black mt-4'></p>
 </div>

 <div className=' flex mt-10 justify-center'> 
    <div className='w-[30%]'>
        <ul className='p-2 ml-10'>
            <li className='flex p-3'><span className='pt-1 mr-2'><MdAcUnit /></span><span>Artist Mangement</span> </li>
            <li className='flex p-3'><span className='pt-1 mr-2'><MdAcUnit /></span><span> Videography </span></li>
            <li className='flex p-3'><span className='pt-1 mr-2'><MdAcUnit /></span><span>Photography </span></li>
            <li className='flex p-3'><span className='pt-1 mr-2'><MdAcUnit /></span><span>Ritual Ceremony </span></li>
            <li className='flex p-3'><span className='pt-1 mr-2'><MdAcUnit /></span><span>Home Decoration </span></li>
            <li className='flex p-3'><span className='pt-1 mr-2'><MdAcUnit /></span><span>Many More ! </span></li>
        </ul>
    </div>
    <div className='w-[66%]  h-[60vh]'>
           <img src="https://www.visionvivaah.com/sectionmedia/1563884033787808.png" className='h-[100%] w-[100%]' alt="" />
    
    </div>

    </div>
 </div>
  </>
  )
}

export default Whatwedo