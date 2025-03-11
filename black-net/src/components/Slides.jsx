import imagepri from '../assets/images/images-slides/imagep.webp';
import imageseg from '../assets/images/images-slides/images.webp';
import imageter from '../assets/images/images-slides/imaget.webp';


import '../styles/styles-components/Slides.sass';

const Slides = () => {
  return (
    <section className="hero">
    <img
      src={imagepri} 
      alt="Imagem de apresentação"
      className="hero-image"
    />
    
  </section>
  );
};

export default Slides;
