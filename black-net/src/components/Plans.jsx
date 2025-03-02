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
    }
];

export default function Plans() {
    return (
        <section className="pricing-section">
            <h2>Escolha seu Plano</h2>
            <p>Aqui estão alguns dos diversos planos que oferecemos, escolha o plano de internet ideal para você e aproveite ao máximo!</p>
            
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
        </section>
    );
}
