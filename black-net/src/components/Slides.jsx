import { useState, useEffect, useRef } from "react";
import imagepri from '../assets/images/imagep.png';
import imageseg from '../assets/images/images.png';
import imageter from '../assets/images/imaget.png';
import '../styles/styles-components/Slides.sass';

const images = [
  imagepri,
  imageseg,
  imageter
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
    e.preventDefault(); // Evita o comportamento padrão de rolagem
  };

  const handleTouchEnd = () => {
    if (Math.abs(startX.current - endX.current) > 50) {
      if (startX.current - endX.current > 0) {
        nextSlide(); // Vai para o próximo slide
      } else {
        prevSlide(); // Volta para o slide anterior
      }
    }
  };

  return (
    <div 
      className="carousel" 
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove} 
      onTouchEnd={handleTouchEnd}
    >
      <button className="prev" onClick={prevSlide}>&lt;</button>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={index === currentIndex ? "active" : ""}
        />
      ))}
      <button className="next" onClick={nextSlide}>&gt;</button>
      <div className="indicators">
        {images.map((_, index) => (
          <span key={index} className={index === currentIndex ? "active" : ""}></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
