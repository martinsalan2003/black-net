import imagepri from '../assets/images/images-slides/imagep.png';
import imageseg from '../assets/images/images-slides/images.png';
import imageter from '../assets/images/images-slides/imaget.png';

import Carousel from 'react-bootstrap/Carousel';
import '../styles/styles-components/Slides.sass';

const Slides = () => {
  return (
    <section>
      
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={imagepri} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imageseg} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imageter} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      
    </section>
  );
};

export default Slides;
