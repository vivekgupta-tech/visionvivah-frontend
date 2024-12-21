import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


function Centermode() {
  const items = [
    <img
      src="https://via.placeholder.com/300x200?text=Image+1"
      alt="Image 1"
      className="slider-item"
    />,
    <img
      src="https://via.placeholder.com/300x200?text=Image+2"
      alt="Image 2"
      className="slider-item"
    />,
    <img
      src="https://via.placeholder.com/300x200?text=Image+3"
      alt="Image 3"
      className="slider-item"
    />,
    <img
      src="https://via.placeholder.com/300x200?text=Image+4"
      alt="Image 4"
      className="slider-item"
    />,
  ];

  return (
    <AliceCarousel
      items={items}
      className="mt-36"
      autoPlay
      autoPlayInterval={2000}
      infinite
      disableButtonsControls
      disableDotsControls
      responsive={{
        0: { items: 1 },
        768: { items: 3 }, // 3 items visible at medium screen size
        1024: { items: 5 }, // 5 items visible at larger screen sizes
      }}
      controlsStrategy="alternate"
    />
  );
}

export default Centermode;
