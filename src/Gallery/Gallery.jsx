import React from 'react';
import Gal from './Gallery.json';  // Import the JSON file
import Gimage from './Gimage';    // Assuming this is a custom image component
import Apis from './Apis'

function Gallery() {
  return (
    <>
       <div><Gimage /></div> 
      <Apis />
    </>
  );
}

export default Gallery;