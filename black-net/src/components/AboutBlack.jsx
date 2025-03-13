import '../styles/styles-components/AboutBlack.sass'


// svgs
import grafico2 from '../assets/images/svgs-google/grafico2.svg'
import tesk from '../assets/images/svgs-google/tesk.svg'
import game from '../assets/images/svgs-google/game.svg'


export default function AboutBlack(){
    return(
        <div className="featurette-section">
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Aqui sabemos tratar <span>Sua empresa </span></h2>
          <p className="lead">Quer alavancar o crescimento da sua empresa? A nossa internet é a solução perfeita para você! Com planos especiais, rápidos e confiáveis, você vai otimizar seus processos, melhorar a comunicação e garantir que seu negócio esteja sempre à frente da concorrência. Não deixe a conexão ser um obstáculo: venha para a nossa internet e experimente um serviço de qualidade que impulsiona sua produtividade e o sucesso da sua empresa</p>
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
          <p className="lead">A nossa internet foi feita sob medida para gamers como você! Com velocidade ultra-rápida, baixa latência e estabilidade, você nunca mais vai sofrer com aquele "lag" chato ou quedas durante suas partidas. Venha para a nossa conexão e jogue como um verdadeiro campeão, sem interrupções. É hora de alcançar o topo do ranking com a melhor internet para jogos! O jogo só começa quando a conexão é boa.</p>
        </div>
      </div>


      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Ative a energia da sua <span>Familia</span></h2>
          <p className="lead"> Com a nossa internet, além de uma rede super-rápida e estável, você também vai unir a família! Assista filmes, jogue, faça videochamadas e compartilhe momentos especiais sem se preocupar com a conexão. Aqui, não oferecemos apenas internet, mas uma forma de aproximar ainda mais quem você ama. Venha para a nossa rede e junte a família com uma conexão que realmente faz a diferença!
        </p>
        </div>
        <div className="col-md-5">
          <div className="container-image">
            <img src={tesk} alt="" />
          </div>
        </div>
      </div>
    </div>
    )
}