import '../styles/styles-components/Qualities.sass'

const features = [
    {
      icon: "📶",
      title: "Velocidade de até 1 GIGA",
      description:
        "Velocidades de até 1GIGA para filmes, séries, jogos e chamadas de vídeo. Navegue com a melhor tecnologia e equipamentos de ponta, turbinando sua conexão!",
    },
    {
      icon: "✅",
      title: "Conexão Segura e Estável",
      description:
        "Garantir uma conexão segura e estável é nossa prioridade. Utilizamos tecnologias de ponta para oferecer uma rede confiável, protegendo seus dados e garantindo acesso contínuo à informação. Com a nossa conexão, você navega com tranquilidade, sabendo que sua privacidade está protegida",
    },
    {
      icon: "🎧",
      title: "Suporte 24 Horas",
      description:
        "Suporte 24 horas ao seu lado, sempre pronto para atender e resolver quaisquer problemas. Conte com nossa equipe especializada para garantir a tranquilidade da sua conexão, a qualquer hora do dia ou da noite!",
    },
  ];


export default function Qualities(){
    return (
        <div className="features">
      {features.map((feature, index) => (
        <div className="feature" key={index}>
          <div className="icon">{feature.icon}</div>
          <div className="description">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
    )
}