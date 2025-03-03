import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import '../styles/styles-components/Plans.sass';

const plans = [
    { 
        title: "Essencial", 
        price: "79,90", 
        stringLeftValue: 'R$', 
        stringRightValue: '/mês', 
        speed: "300", 
        stringRightMb: 'Mbps', 
        features: [
            "Acesso ilimitado",
            "Suporte Tecnico",
            "Aparelho 5G",
            "Zenix TV",
            "Wifi - 6",
            "Telefonia - Gratis"
        ],
        availableFeatures: 4
    },
    { 
        title: "Avançado", 
        price: "99,90", 
        stringLeftValue: 'R$', 
        stringRightValue: '/mês',  
        speed: "700", 
        stringRightMb: 'Mbps', 
        features: [
            "Acesso ilimitado",
            "Suporte Tecnico",
            "Aparelho 5G",
            "Zenix TV",
            "Wifi - 6",
            "Telefonia - Gratis"
        ],
        availableFeatures: 3
    },
    { 
        title: "Ultra",
        price: "139,90", 
        stringLeftValue: 'R$', 
        stringRightValue: '/mês', 
        speed: "1000", 
        stringRightMb: 'Mbps', 
        features: [
            "Acesso ilimitado",
            "Suporte Tecnico",
            "Aparelho 5G",
            "Zenix TV",
            "Wifi - 6",
            "Telefonia - Gratis"
        ],
        availableFeatures: 6
    }
];

export default function Plans() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        swipe: true, // Habilita o swipe
        touchMove: true, // Habilita o touchmove
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    arrows: false, // Desabilita as setas em telas pequenas
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1, // Garantir que apenas 1 slide é mostrado
                }
            }
        ]
    };

    return (
        <section className="pricing-section">
            <h2>Escolha seu Plano</h2>
            <p>Aqui estão alguns dos diversos planos que oferecemos, escolha o plano de internet ideal para você e aproveite ao máximo!</p>
            
            {isMobile ? (
                <Slider {...settings} className="card-container slider-container">
                    {plans.map((plan, index) => (
                        <div key={index} className="card">
                            <div className="card-body">
                                <div className="cardheader">
                                    <h3 className="card-title">{plan.title}</h3>
                                    <hr className="featurette-divider divisor" />
                                    <p className="card-speed">
                                        <span>{plan.speed}</span> {plan.stringRightMb}
                                    </p>
                                    <p className="card-subtitle">
                                        {plan.stringLeftValue} <span>{plan.price}</span> {plan.stringRightValue}
                                        <hr className="featurette-divider divisor" />
                                    </p>
                                </div>
                                 
                                <div className="container-features">
                                    <ul className="card-features">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className={idx >= plan.availableFeatures ? "disabled" : ""}>
                                                {idx >= plan.availableFeatures ? <s>{feature}</s> : feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='container-btn'>
                                    <a href="#"><button type='button'>Contratar!</button></a>
                                </div>
                            </div> 
                        </div>
                    ))}
                </Slider>
            ) : (
                <div className="card-container">
                    {plans.map((plan, index) => (
                        <div key={index} className="card">
                            <div className="card-body">
                                <div className="cardheader">
                                    <h3 className="card-title">{plan.title}</h3>
                                    <hr className="featurette-divider divisor" />
                                    <p className="card-speed">
                                        <span>{plan.speed}</span> {plan.stringRightMb}
                                    </p>
                                    <p className="card-subtitle">
                                        {plan.stringLeftValue} <span>{plan.price}</span> {plan.stringRightValue}
                                        <hr className="featurette-divider divisor" />
                                    </p>
                                </div>
                                 
                                <div className="container-features">
                                    <ul className="card-features">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className={idx >= plan.availableFeatures ? "disabled" : ""}>
                                                {idx >= plan.availableFeatures ? <s>{feature}</s> : feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='container-btn'>
                                    <a href="#"><button type='button'>Contratar!</button></a>
                                </div>
                            </div> 
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
