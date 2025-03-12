import imagepri from '../assets/images/images-slides/imagep.jpg';
import imageseg from '../assets/images/images-slides/images.jpg';
import imageter from '../assets/images/images-slides/imaget.jpg';


import '../styles/styles-components/Slides.sass';

const Slides = () => {
  return (
    <section className="hero">
    <img
      src={imageter} 
      alt="Imagem de apresentação"
      className="hero-image"
    />
    
  </section>
  );
};

export default Slides;
