import React, { useState, useEffect } from 'react';
import axios from 'axios';


const GalleryPage = () => {
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState('');

  // Fetch gallery images on component mount
  useEffect(() => {
    axios
      .get('http://localhost:4001/Gallery')
      .then((response) => {
        setGallery(response.data);
      })
      .catch((error) => {
        setError('Error fetching images');
      });
  }, []);

  return (
    <>
      <div className="bg-[url('https://www.visionvivaah.com/argon/img/back.jpg')] w-[100%]  mb-24">
     
      <div
      className=' [w-100%] grid grid-cols-3 items-center pt-10 -gap-5 ml-20 mr-16'>
        {gallery.map((image, index) => (
          <div key={index} className='flex justify-center mt-5 h-[48vh] w-[85%]'>
            <img
              src={image.image}
              alt={`Gallery Image ${index + 1}`}
              className='h-[100%] w-[100%] object-cover'
           />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default GalleryPage;
