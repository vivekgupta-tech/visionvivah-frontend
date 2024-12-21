import React from "react";
import { NavLink } from 'react-router-dom'

const TransparentOverlayWithText = () => {
  return (
    <>
<div className="pt-28 h-[80vh]">
    <div className="relative bg-cover bg-center h-[100%] " style={{ backgroundImage:"url('https://www.visionvivaah.com/argon/img/s3.jpg')",}}>
<div className="absolute inset-0 bg-sky-900 bg-opacity-60"></div>

<h1 className='destination-titles relative font-extrabold text-center  text-white text-7xl  pt-24'>Our Services</h1>
 <div className='flex'>
 <p className=' ml-[44.5%] w-32 border-2 relative border-red-600 mt-4'></p>
 <p className='border-2 ml-1 w-1 relative border-black mt-4'></p>
 <p className='border-2 w-1 ml-1  border-black mt-4'></p>
 
 </div>
 <ul className=" justify-center flex text-white gap-2 mt-3 relative text-xl">
 <li className="hover:border-b-2 border-white"><NavLink to = "/">Home</NavLink></li>
    <li >/</li>
    <li className="hover:border-b-2 border-white">Our Services</li>
 </ul>
</div>
</div>
    </>
  );
};

export default TransparentOverlayWithText;
