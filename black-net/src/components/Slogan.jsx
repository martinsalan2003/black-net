import React, { useEffect, useRef, useState } from 'react';
import linhasPri from '../assets/images/efeitos/linhasp.png';
import '../styles/styles-components/Slogan.sass';

export default function Slogan() {
    const sloganRef = useRef(null);
    const [isBlurred, setIsBlurred] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
            
                    setIsBlurred(false);
                } else {
                    
                    setIsBlurred(true);
                }
            },
            {
                threshold: 1.0, 
            }
        );

        if (sloganRef.current) {
            observer.observe(sloganRef.current);
        }

        return () => {
            if (sloganRef.current) {
                observer.unobserve(sloganRef.current);
            }
        };
    }, []);

    return (
        <section className={`slogan ${isBlurred ? 'blurred' : ''}`} ref={sloganRef}>
            <img src={linhasPri} alt="Linhas de efeito" />
            <h1>
                Internet <span>100<span className='porcentagem'>%</span></span> Fibra Òptica!
            </h1>
            <p>Exclusividade e potência na sua conexão, navegue sem limites!</p>
        </section>
    );
}
