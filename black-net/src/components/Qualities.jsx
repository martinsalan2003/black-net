import { useEffect, useRef, useState } from 'react'
import '../styles/styles-components/Qualities.sass'

import iconVel from '../assets/images/icones-geral/velocimetro.png'
import iconSec from '../assets/images/icones-geral/seguranca.png'
import iconAte from '../assets/images/icones-geral/atendimento.png'

const features = [
    {
        icon: iconVel,
        title: "Velocidade de até 1 GIGA",
        description:
            "Internet ultra-rápida de até 1 GIGA para streaming, games e videochamadas com tecnologia de ponta!",
    },
    {
        icon: iconSec,
        title: "Conexão Segura e Estável",
        description:
            "Conexão segura e estável com tecnologia de ponta para proteção e acesso contínuo. Navegue com privacidade garantida!",
    },
    {
        icon: iconAte,
        title: "Suporte 12 Horas",
        description:
            "Suporte 12h por dia pronto para atender e resolver qualquer problema. Conte com nossa equipe especializada sempre que precisar",
    },
]

export default function Qualities() {
    const [isVisible, setIsVisible] = useState(false)
    const featuresRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(featuresRef.current)
                }
            },
            { threshold: 0.5 }
        )

        if (featuresRef.current) {
            observer.observe(featuresRef.current)
        }

        return () => {
            if (featuresRef.current) {
                observer.unobserve(featuresRef.current)
            }
        }
    }, [])

    return (
        <div
            className={`features ${isVisible ? 'visible' : ''}`}
            ref={featuresRef}
        >
            {features.map((feature, index) => (
                <div
                    className={`feature ${isVisible ? 'visible' : ''}`}
                    key={index}
                >
                    <div className="icon">
                        <img src={feature.icon} alt={feature.title} />
                    </div>
                    <div className="description">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
