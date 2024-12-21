import React, { useEffect, useState } from 'react';

const VerticalCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch slider data from JSON
  useEffect(() => {
    fetch('http://localhost:4001/slider')
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
    <div className="vertical-carousel">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="carousel-caption">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalCarousel;
