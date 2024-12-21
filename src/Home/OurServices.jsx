import React from 'react'
import Ourservices from './OurServices.json'
import { Link } from "react-router-dom";
function OurService() {
  return (
    <>
    
    <h1 className='destination-titles  font-extrabold text-center  text-5xl pt-24'>Our Services</h1>
 <div className='flex '>
 <p className=' ml-[44.5%] w-32 border-2 border-red-600 mt-4'></p>
 <p className='border-2 ml-1 w-1 border-black mt-4'></p>
 <p className='border-2 w-1 ml-1 border-black mt-4'></p>
 </div>
    <div  className="h-[100vh] w-[100%] pl-24 pt-16 flex gap-10 flex-wrap">
      
 {Ourservices.map((data) =>( 
    
 
        <div key={data.id} className="h-[60vh] w-[28.9%] ">


            <div className="">
                <img src={data.image} alt=""/>
            </div>
 <div>
    <h1 className="destination-title pt-4 text-3xl">{data['wedding-type']}</h1>
       <p class="text-sm mt-3 text-black">
        {data.text}.
        </p>


            </div>
        </div>
        ))}
    </div>
  <div className=''>
    <Link to="/services" className=" mt-56 ml-[41%]  bg-red-500  text-white px-4 py-2 text-3xl   inline-block transition-all duration-300  hover:bg-green-500 hover:rounded-3xl"> VIEW MORE</Link>
</div>
    </>
  )
}

export default OurService