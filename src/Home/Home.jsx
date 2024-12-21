import React from 'react'
import OurServices from './OurServices'
import Hprofessional from "./Hprofessinal"
import HomeContact from './HomeContact'
import Destination from './Destination '
import VerticalSlider from './verticalSlider'
import CenterMode from './centermode'
import Carousel from './Carousel'
function Home() {
  return (
    <>
    
    
    <div className='pt-32'> <VerticalSlider /></div>
         
    
    <div><OurServices /></div>
    <div><Hprofessional /></div>
    <div><Destination /></div>
    <div> <Carousel /></div>
    <div><HomeContact /> </div>



    </>
  )
}

export default Home