import Header from '../../components/Header.jsx'
import Slides from '../../components/Slides.jsx'
import Plans from '../../components/Plans.jsx'
import Qualities from '../../components/Qualities.jsx'
import AboutBlack from '../../components/AboutBlack.jsx'
import Partners from '../../components/Partners.jsx'
import Footer from '../../components/Footer.jsx'
import Slogan from '../../components/Slogan.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';




function Home() {
 
  return (
    <>
      <Header/>
      <Slides/>
      <Slogan/>
      <Plans/>
      <Qualities/>
      <AboutBlack/>
      <Partners/>
      <Footer/>     
    </>
  )
}

export default Home;
