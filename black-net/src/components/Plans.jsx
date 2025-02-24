import { useState } from "react";
import '../styles/styles-components/Plans.sass';

const plans = [
    { title: "Essencial", price: "79,90", strinngLeftValue:'R$', stringRithValue:'/mês', speed: "300", stringRithMb:'Mbps', description: "Ideal para quem está começando." },
    { title: "Ultra", price: "139,90", strinngLeftValue: 'R$', stringRithValue:'/mês', speed: "1000", stringRithMb:'Mbps', description: "Para quem deseja recursos avançados." },
    { title: "Avançado", price: "99,90", strinngLeftValue:'R$', stringRithValue:'/mês',  speed: "700", stringRithMb:'Mbps', description: "Melhor custo-benefício para usuários regulares." }
];

const features = [
    { name: "Acesso Público", essential: true, advanced: true, ultra: true },
    { name: "Acesso Privado", essential: false, advanced: true, ultra: true },
    { name: "Permissões Avançadas", essential: true, advanced: true, ultra: true },
    { name: "Compartilhamento", essential: false, advanced: true, ultra: true },
    { name: "Membros Ilimitados", essential: false, advanced: true, ultra: true },
    { name: "Segurança Extra", essential: false, advanced: false, ultra: true }
];

export default function Plans() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [clickedCard, setClickedCard] = useState(null); 

    const handleCardClick = (index) => {
        setClickedCard(index); 
    };

    return (
        <section className="pricing-section">
            <h2>Escolha seu Plano</h2>
            <p>Aqui estão alguns dos diversos planos que oferecemos, Escolha o plano de internet ideal para você e aproveite ao máximo!</p>
            
            <div className="card-container">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`card ${hoveredCard === index ? "hovered" : ""} ${clickedCard === index ? "clicked" : ""}`} // A
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={() => handleCardClick(index)} 
                    >
                        <div className="card-body">
                            {clickedCard === index ? (
                                <>
                                    
                                    <h3 className="card-title2">Bela escolha!</h3>
                                    <p className="card-text-add">
                                        <a href="/agendar" className="card-link">Clique aqui e agende sua instalação!</a>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <div className="cardheader">
                                        <h3 className="card-title">{plan.title}</h3>
                                        <p className="card-speed"><span>{plan.speed}</span>{plan.stringRithMb}</p>
                                    </div>
                                    <p className="card-subtitle">
                                        {plan.strinngLeftValue} <span>{plan.price}</span> {plan.stringRithValue}
                                    </p>
                                    <p className="card-text">{plan.description}</p>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Tabela de Comparação */}
            <div className="table-container">
                <h3>Compare os Planos</h3>
                <p>Aqui você descobre um pouco dos benefícios de cada plano</p>
                <table className="plans-table">
                    <thead>
                        <tr>
                            <th>Recursos</th>
                            <th>Essencial</th>
                            <th>Avançado</th>
                            <th>Ultra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr key={index}>
                                <td>{feature.name}</td>
                                <td>{feature.essential ? "✓" : ""}</td>
                                <td>{feature.advanced ? "✓" : ""}</td>
                                <td>{feature.ultra ? "✓" : ""}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
