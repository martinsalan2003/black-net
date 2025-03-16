import '../styles/styles-components/AboutBlack.sass';
import grafico2 from '../assets/images/svgs-google/grafico2.svg';
import tesk from '../assets/images/svgs-google/tesk.svg';
import game from '../assets/images/svgs-google/game.svg';

export default function AboutBlack() {
  // Função para verificar se a seção está visível na tela
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  // Função para adicionar a classe 'visible' quando a seção estiver visível
  const handleScroll = () => {
    const featurettes = document.querySelectorAll('.featurette');
    featurettes.forEach((featurette) => {
      if (isElementInViewport(featurette)) {
        featurette.classList.add('visible');
      }
    });
  };

  // Adiciona o ouvinte de evento de rolagem
  window.addEventListener('scroll', handleScroll);

  return (
    <div id='aboutblacknet' className="featurette-section">
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Aqui sabemos tratar <span>Sua empresa</span></h2>
          <p className="lead">Quer alavancar o crescimento da sua empresa? A nossa internet é a solução perfeita para você! Com planos especiais, rápidos e confiáveis...</p>
        </div>
        <div className="col-md-5">
          <div className="container-image">
            <img src={grafico2} alt="" />
          </div>
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-5 order-md-1">
          <div className="container-image">
            <img src={game} alt="" />
          </div>
        </div>
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Viva o mundo dos <span>Games!</span></h2>
          <p className="lead">A nossa internet foi feita sob medida para gamers como você! Com velocidade ultra-rápida, baixa latência e estabilidade...</p>
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Ative a energia da sua <span>Familia</span></h2>
          <p className="lead">Com a nossa internet, além de uma rede super-rápida e estável, você também vai unir a família! Assista filmes, jogue, faça videochamadas...</p>
        </div>
        <div className="col-md-5">
          <div className="container-image">
            <img src={tesk} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
