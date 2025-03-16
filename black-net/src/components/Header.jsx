import { useState, useEffect } from 'react';

import logo from '../assets/images/icones-black/BlackNet.png'
import '../styles/styles-components/Header.sass'

export default function Header(){
        const [isScrolled, setIsScrolled] = useState(false);
        const [menuOpen, setMenuOpen] = useState(false);
        const [isVisible, setIsVisible] = useState(true); 
        const [lastScrollY, setLastScrollY] = useState(0); 
      
        const handleMenuClose = () => {
          setMenuOpen(false); 
        };
      
        useEffect(() => {
          const isMobile = window.innerWidth <= 768;
      
          const handleScroll = () => {
            const currentScrollY = window.scrollY;
      
            if (isMobile) {
              if (currentScrollY < lastScrollY) {
                setIsVisible(true);
              } else if (currentScrollY > 50) {
                setIsVisible(false); 
              }
      
              setIsScrolled(currentScrollY > 50); 
            } else {
              setIsScrolled(currentScrollY > 50);
            }
      
            setLastScrollY(currentScrollY);
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, [lastScrollY]); 
      
        return (
          <header className={`${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
          <img src={logo}alt="logo-dev" /> 
            
            <div 
              className={`hamburger ${menuOpen ? 'active' : ''}`} 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
      
            <nav className={menuOpen ? 'open' : ''}>
              <ul>
                <li><a href="#plans" onClick={handleMenuClose}>Planos</a></li>
                <li><a href="#feedbacks" onClick={handleMenuClose}>Avaliações</a></li>
                <li><a href="#aboutblacknet" onClick={handleMenuClose}>Sobre</a></li>
                <span><a className='cont' href="#contato" onClick={handleMenuClose}>Central do assinante</a></span>
              </ul>
            </nav>
          </header>
    )
}