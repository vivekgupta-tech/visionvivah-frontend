import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="pt-[24vh] gap-20 mb-40 ">
        <div className=" border-2  text-lg h-12   font-bold   text-center bg-gray-500  border-green-500 ">
          <ul className="flex  bg-blue">
            <li className="bg-green-500 p-2  hover:bg-blue-500 hover:border-2 hover:border-red-500">
              <NavLink to="gallery">Gallery</NavLink>
            </li>

            <li className=" bg-green-500 p-2 hover:bg-blue-500 hover:border-2  hover:border-red-500">
              <NavLink to="homeTeam">Team</NavLink>
            </li>

            <li className=" bg-green-500 p-2 hover:bg-blue-500 hover:border-2  hover:border-red-500">
              <NavLink to="Service">Service</NavLink>
            </li>

            <li className=" bg-green-500 p-2 hover:bg-blue-500 hover:border-2  hover:border-red-500">
              <NavLink to="Testimonial">Testimonial</NavLink>
            </li>
            <li className=" bg-green-500 p-2 hover:bg-blue-500 hover:border-2  hover:border-red-500">
              <NavLink to="userdata">Userdata</NavLink>
            </li>
          </ul>
        </div>
        <div className="border-2 border-green-500  bg-gray-500 w-[100%] ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Navbar;
