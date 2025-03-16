import { useEffect, useRef, useState } from 'react'
import "../styles/styles-components/Feedbacks.sass";
import { Star } from "lucide-react"
import iconeAspas from '../assets/images/icones-geral/cotacao.png'

const feedbacks = [
  {
    name: "Ana Souza",
    feedback: "Serviço impecável! Atendimento rápido, eficiente e sempre pronto para oferecer a melhor experiência. Totalmente recomendado!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    icone: iconeAspas
  },
  {
    name: "Carlos Oliveira",
    feedback: "Muito satisfeito com o suporte técnico!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    icone: iconeAspas
  },
  {
    name: "Fernanda Lima",
    feedback: "Superou minhas expectativas! Recomendo.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    icone: iconeAspas
  },
  {
    name: "João Pedro",
    feedback: "Equipe muito atenciosa e prestativa.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    icone: iconeAspas
  },
  {
    name: "Mariana Santos",
    feedback: "O produto é incrível! Vale cada centavo.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    icone: iconeAspas
  },
  {
    name: "Rafael Costa",
    feedback: "Mano, simplesmente épico! ping estabilizou em 5 Adorei demais!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    icone: iconeAspas
  },
];

export default function Feedbacks() {
    const [isVisible, setIsVisible] = useState(false);
    const feedbacksRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(feedbacksRef.current);
                }
            },
            { threshold: 0.5 }
        );

        if (feedbacksRef.current) {
            observer.observe(feedbacksRef.current);
        }

        return () => {
            if (feedbacksRef.current) {
                observer.unobserve(feedbacksRef.current);
            }
        };
    }, []);

    return (
        <section id="feedbacks" className={`container-feedbacks ${isVisible ? 'visible' : ''}`} ref={feedbacksRef}>
            <h1>Algumas declarações</h1>
            <div className="feedback-container">
                {feedbacks.map((item, index) => (
                    <div className={`feedback-card ${isVisible ? 'visible' : ''}`} key={index}>
                        <div className="container-image">
                            <img src={item.image} alt={item.name} className="profile-pic" />
                        </div>
                        <div className="feedback">
                            <h3>{item.name}</h3>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={15}
                                        className={i < item.rating ? "filled" : "unfilled"}
                                    />
                                ))}
                            </div>
                            <p>{item.feedback}</p>
                        </div>
                        <div className="container-icon">
                            <img src={item.icone} alt="icone" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
