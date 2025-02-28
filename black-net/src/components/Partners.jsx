import '../styles/styles-components/Partners.sass';

import img from '../assets/images/logo-parceiros/Logo-keronet.png';

const images = [
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,

];

export default function Partners() {
  return (
    <section className='container-parceiros'>
            <h1>Empresas parceira</h1>
            <div className="image-slider">
      <div className="slider-content">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
    </section>

  )
}
