import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from "../image/logo.png"


function Footer() {
  return (
    <>
    <div className=' pl-9 h-[53vh] w-[100%] 'style={{backgroundColor: "var(--deepblue)"}}>
      <div> <img src={logo} className=" h-[25vvh] w-[25vh] items-center ml-[42%]  pt-10"alt="" /></div>

  <div className='justicify-center text-center ml-5 mr-20'>
    
<FontAwesomeIcon icon={faFacebookF} className="text-blue-600 text-2xl m-2 border-2 h-7 w-7 p-2 border-white rounded-full"/>
<FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-2xl m-2 border-2 h-7 w-7 p-2 border-white rounded-full" />
<FontAwesomeIcon icon={faPinterestP} className="text-red-600 text-2xl m-2 border-2 h-7 w-7 p-2 border-white rounded-full" />
<FontAwesomeIcon icon={faYoutube} className="text-red-600 text-2xl m-2 border-2 h-7 w-7 p-2 border-white rounded-full" />
<FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-2xl m-2 border-2 h-7 w-7 p-2 border-white rounded-full" />

</div>

<div><p className='text-white text-center'>2019, All Right Reserved @ Vision Vivaah | Web Design & Development By <span className='text-blue-500 '>Web <span className='-ml-1' style={{color:"var(--red)"}}>Hopers</span></span> </p></div>




</div>
      
      </>
      
  )
}

export default Footer