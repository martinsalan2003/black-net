import { FaFacebookF, FaTwitter, FaVimeoV } from "react-icons/fa";
import '../styles/styles-components/Footer.sass';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h2 className="footer-logo">Blacknet</h2>
          <p className="footer-text">
            Oferecemos soluções de internet de alta qualidade, com planos flexíveis e atendimento dedicado para garantir a melhor experiência online. Conte conosco para estar sempre conectado e atualizado!
          </p>
          <div className="footer-social">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaVimeoV className="icon" />
          </div>
        </div>

        
        <div className="footer-section">
          <h3 className="footer-title">FACILIDADES</h3>
          <ul className="footer-list">
            <li>2<sup>a</sup> Via Fácil</li>
            <li>Consultar cobertura</li>
            <li>Promessa de pagamentos</li>
            <li>Estou sem internet</li>
            <li>Contratos e regulamentos</li>
          </ul>
        </div>



        <div className="footer-section">
          <h3 className="footer-title">SERVIÇOS</h3>
          <ul className="footer-list">
            <li>Contratar</li>
            <li>Financeiro</li>
            <li>Suporte tecnico</li>
            <li>Cancelamento</li>
            <li>SAC</li>
          </ul>
        </div>

        {/* Our Pages */}
        <div className="footer-section">
          <h3 className="footer-title">CONTATOS</h3>
          <ul className="footer-list">
            <li>(11) 93444-3214</li>
            <li>(11) 08004-870</li>
            <li>email@blacknet.com</li>
            <li>Rua Piracicaba, 712 
            </li>
          </ul>
        </div>


      </div>


      

      <div className="footer-bottom">
        <p>Copyright © 2025 - Alan Martins All Rights Reserved</p>
        <div className="footer-links">
          <span>Termos</span>
          <span>Política de Privacidade</span>
          <span>Suporte</span>
        </div>
      </div>
    </footer>
  );
}
