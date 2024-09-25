import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Nav from "react-bootstrap/Nav";
import imgLogo from '../img/Logo-sala-de-belleza.jpg'

function Header() {
  const [estaAutenticado, setEsAutenticado] = useState(false);

  useEffect(() => {
    const autenticado = localStorage.getItem('Autenticado') === 'true';
    setEsAutenticado(autenticado);
  }, []);

  const CerrarSesion = () => {
    localStorage.removeItem('Autenticado'); 
    setEsAutenticado(false)
  };
  

  return (  
    <header >
      <div className="headermiddle">
        <div className="middleContainer">
          <img src={imgLogo} alt="Logo" id="logo" />
          {estaAutenticado ? (
              <>
                <button className="btnIniciar" onClick={CerrarSesion}>Cerrar Sesión</button>
              </>
            ) : (
              <Link to="/Login">
                <button className="btnIniciar">Iniciar Sesión</button>
              </Link>
            )}
        </div>
      </div>

      <div id="navContainer">
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/AboutUs">Sobre Nosotros</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Contacts">Contactos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/NewProducts">AdminTasking</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </header>
  );
}

export default Header;


