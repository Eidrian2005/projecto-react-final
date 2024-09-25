import React from 'react'
import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column contact">
          <h4>Contacto</h4>
          <p className="whatsapp-link">
            <FontAwesomeIcon icon={faWhatsapp} />61504050
          </p>
          <p className='CorreoC'>
          <FontAwesomeIcon icon={faEnvelope} /> Krochelle@gmail.com
          </p>
        </div>
        <div className="footer-column info">
          <h4>Información</h4>
          <p>
            Sala de belleza Karol se enfoca en realzar tu belleza,
            buscando tu mejor look. 
            Te ofrecemos accesoria en tu imagen 
            siempre buscando una mejor imagen segun tu gusto
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
