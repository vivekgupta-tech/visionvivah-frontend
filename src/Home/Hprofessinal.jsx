import React from "react";
import { Link } from 'react-router-dom'

const TransparentOverlayWithText = () => {
  return (
    <>
<div className="pt-28 h-[80vh]">
    <div className="relative bg-cover bg-center h-[100%] " style={{ backgroundImage:"url('https://www.visionvivaah.com/aboutvivaah/backgound.jpg')",}}>
<div className="absolute inset-0 bg-sky-900 bg-opacity-60"></div>

<h1 className='destination-titles relative font-extrabold text-center  text-white text-5xl  pt-24'>About Vivaah The Wedding Professional Services</h1>
 <div className='flex'>
 <p className=' ml-[44.5%] w-32 border-2 relative border-red-600 mt-4'></p>
 <p className='border-2 ml-1 w-1 relative border-black mt-4'></p>
 <p className='border-2 w-1 ml-1  border-black mt-4'></p>
 
 </div>
 <div><p className="text-center relative text-white pt-5 font-semibold">The Emotion counts as it is related the Bride and Groom’s childhood Dream and we value it.</p></div>

    <button className="hover:bg-red-500 rounded-[25vh] border-2 border-white text-3xl text-bold transition duration-300 text-white w-60 p-2 ml-[40%] mt-10 relative"><Link to="/about-us" >Read More</Link></button>
</div>
</div>
    </>
  );
};

export default TransparentOverlayWithText;
