import React, { useState, useEffect } from "react";
import axios from "axios";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/testimonials")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
   <>
    
    <div className="bg-[url('https://www.visionvivaah.com/argon/img/back.jpg')] h-auto w-[100%] pl-20 mb-24 pt-48">
      

      {testimonials.map((data) => (
        <div
          key={data.id}
          className="h-36 w-[96%] bg-white border-l-white flex mt-10 items-center shadow-2xl gap-14 text-gray-500 border-r-4 border-r-black"
        >
          <div className="border-t-[30px] border-r-[30px] border-l-white border-t-red-500 w-0 h-0 border-b-[32px] border-r-[32px] border-r-white bg-white border-b-red-500 border-l-red-500 pt-[12.8vh]" />
          <div>
            <img src={data.image} alt="" className="w-32 rounded-full left-0" />
          </div>
          <div>
            <p className="text-md t">
              {data.text} <br />
            </p>
            <h1 className="text-red-600 font-bold text-gray-700 text-xl gap-2 mt-4 flex">
              {data.name} <div className=" .destination-titles text-sm mt-1 font-normal">{data.location}</div>
              </h1></div>
          </div>
        
      ))}
    </div>
    </>
  );
};

export default Testimonials;
