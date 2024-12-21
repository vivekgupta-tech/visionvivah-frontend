import React, { useEffect, useState } from 'react';


const BackgroundCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch slider data from JSON
  useEffect(() => {
    fetch('http://localhost:4001/slide')
      .then((response) => response.json())
      .then((data) => setSlides(data))
      .catch((error) => console.error('Error fetching slider data:', error));
  }, []);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) return <p>Loading...</p>;

  return (
    <> 

    <div className="b-background-carousel">
    
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={` b-carousel-slide   pt-10 font-bold mt-28 ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        ><h1 className=' destination-title pt-10 text-center text-yellow-500 text-6xl font-bold'>Wedding Entertainment</h1>
        
        <p className=' pt-10 text-center text-gray-200 text-2xl font-bold'>The Emotion counts as it is related the Bride and Groom’s childhood Dream and we value it. to make your dream come true into reality we provide one stop solution for Wedding & Events. We cherish your peace of mind by offering a complete range of wedding services and saving you from being occupied on dealing and wrangling with the individual suppliers. As we are a renowned company and have been organizing wedding on a frequent basis, we get the best rates available in the market from all the vendors which can be benefited by you. So If you want best wedding planners in Punjab and event management company in Ludhiana then feel free to contact us anytime.</p>
          <div className="b-carousel-caption">
         
            <h3>{slide.title}</h3>
            
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default BackgroundCarousel;
