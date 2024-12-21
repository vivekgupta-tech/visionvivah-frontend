import React from 'react'
import { MdAcUnit } from "react-icons/md";
import whatwedo from "./whatwedo.json"
function Aframe() {
  return (
  <>
   <div class="bg-[url('https://www.visionvivaah.com/argon/img/back.jpg')] top-0 h-screen w-[100%]  ">
 <h1 className='destination-titles  font-extrabold text-center text-5xl  pt-24'>What We are</h1>
 <div className='flex'>
 <p className=' ml-[44.5%] w-32 border-2 border-red-600 mt-4'></p>
 <p className='border-2 ml-1 w-1 border-black mt-4'></p>
 <p className='border-2 w-1 ml-1 border-black mt-4'></p>
 </div>

 <div className='w-[94%]  flex  pt-10'>

    <div className=' w-[45%]  mt-14 justify-center'><img src="https://www.visionvivaah.com/sectionmedia/1563884033717864.png" alt="" className='w-[100%]' /></div>
    <div>
    {whatwedo.map((data) => ( 
    
    <div key={data.id} className='w-[90%] ml-4  pt-4'>
        <ul className='p-6'>
            <li className='flex '><span className='pt-1 mr-2'><MdAcUnit /></span><span className='absolute ml-5 text-md'>{data.title} <span className=' font-thin'>{data.text}</span></span>  </li> 
            
        </ul>
       
    </div>
    
    ))}
 </div>
    </div>
    </div>
 

    </>
  )
}

export default Aframe