import React from 'react'
import Aframe from './Aframe'
import Whatwedo from './Whatwedo'
import Whychooseus from './Whychooseus'
import Team from './Team'
import Footer from '../Footer/Footer'
import AImage from   './AImage'

function About() {
  return (
    <>

     <div><AImage /></div>
    <div className=' h-[40vh] w-[90%] ml-16 '>
        <p className='text-center   text-gray-900 font-sans pt-4'>Vision Vivah designs beautiful, elegant, and luxurious weddings. Our personal, bespoke, and flexible approach to wedding planning is what sets Vivaah apart. Our clients come from all walks of life, and our services are tailored to meet their individual needs. We take pride in our international reputation for delivering exceptional events with discretion and world-class service. We are privileged to collaborate with some of the most respected companies in the events business, all of whom share our passion, commitment, and high standards of service, excellence, and attention to detail</p>
        <br />
        
        <p className='text-center text-gray-900 font-serif ' >The emotion counts as it is related to the bride and groom's childhood dreams, and we highly value it.</p>

        <br />
        
        <p className='text-center  text-gray-900 font-serif pt-2'>To turn your dream into reality, we provide a one-stop solution for weddings and events. We aim to enhance your peace of mind by offering a comprehensive range of wedding services, sparing you the hassle of dealing with individual suppliers. As a renowned company with extensive experience in organizing weddings, we secure the best rates from all vendors in the market, which can benefit you.</p>
   </div>

   <div className='mt-40'><Aframe /></div>
   <div className=''><Whatwedo /></div>
   <div className='mt-32'><Whychooseus /></div>
   <div className='mt-34'><Team /></div>
   
   </>
  )
}

export default About