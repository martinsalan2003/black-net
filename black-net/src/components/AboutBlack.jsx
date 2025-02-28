import '../styles/styles-components/AboutBlack.sass'

// servidor
import pop from '../assets/images/image-servers/pop.webp'
import pessoas from '../assets/images/image-servers/pessoas.jpg'


// pessoas google
import grafico1 from '../assets/images/svgs-google/grafico1.svg'
import grafico2 from '../assets/images/svgs-google/grafico2.svg'
import tesk from '../assets/images/svgs-google/tesk.svg'
import trabalho from '../assets/images/svgs-google/trabalho.svg'
import ideia from '../assets/images/svgs-google/ideia.svg'

export default function AboutBlack(){
    return(
        <div className="container featurette-section">
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">valore do cliente <span>Para nossa empresa</span></h2>
          <p className="lead">nosso cliente é o centro de tudo o que fazemos. Mais que uma transação, é um parceiro essencial para nosso crescimento. Buscamos não apenas atender, mas superar expectativas, investindo em qualidade, transparência e um atendimento personalizado. Nosso sucesso está na satisfação e no impacto positivo que geramos para cada cliente.</p>
        </div>
        <div className="col-md-5">
          <div className="container-image">
            <img src={grafico2} alt="" />
          </div>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-5 order-md-1">
          <div className="container-image">
            <img src={pop} alt="" />
          </div>
        </div>
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Conheça um puco mais, <span>Sobre o Pop.</span></h2>
          <p className="lead">ao lado vemos o POP (<span>Ponto de Presença</span>) é um local físico onde as redes de telecomunicação se conectam, permitindo a troca de dados entre provedores e usuários. Ele é essencial para garantir a velocidade, segurança e estabilidade na transmissão de informações, funcionando como um hub central para a comunicação de internet. Com equipamentos como roteadores e servidores, o POP melhora a qualidade da conexão e oferece redundância, garantindo que, em caso de falha, outro ponto possa assumir a conexão. Em resumo, o POP é fundamental para a infraestrutura das empresas de internet..</p>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Missão, visão, <span>Valores.</span></h2>
          <p className="lead">
          <span className='mvv'>Missão: </span> 
          Oferecer soluções inovadoras e de alta qualidade, garantindo a satisfação dos clientes e contribuindo para o desenvolvimento sustentável. <br /><br />


<span className='mvv'>Visão: </span>
Ser líder no nosso segmento, reconhecida pela excelência, inovação e responsabilidade social, impactando positivamente a sociedade.<br /><br />

<span className='mvv'>Valores: </span> 
Compromisso, Inovação, Respeito, Sustentabilidade, Ètica
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