import React from "react";
import { NavLink, Outlet } from 'react-router-dom'
import logo from "../image/logo.png"


function Navbar() {
  return (
    <>
    <div className="flex justify-center h-[15vh] w-[100%] gap-40  pr-2"style={{backgroundColor: "var(--deepblue)",color:"var(--yellow)" }} >
     <div>
        <ul className="flex  gap-7 text-lg text-white p-4 mt-2 " style={{color:"var(--yellow)"}}>
            <li ><NavLink to = "/">Home</NavLink></li>
            <li><NavLink to = "./about-us">About Us</NavLink></li>
            <li><NavLink to = "./services">Services</NavLink></li>
            <li><NavLink to = "./blog"></NavLink></li>
        </ul>
    </div>

<div>   <NavLink to = "./login"><img src={logo} alt="" className="h-[10vh] w-[20vh] font-extrabold  mt-3"/></NavLink> </div>
    <div>
        
        <ul className="flex text-center   gap-7 text-lg p-4 mt-2">
            <li><NavLink to = "./gallery">Gallery </NavLink></li>
            <li><NavLink to = "./testimonials">Client Testimonials</NavLink></li>
            <li><NavLink to = "./contacts">Contact Us</NavLink></li>
        </ul>
    </div>
      </div>
    </>
  );
}

export default Navbar;
