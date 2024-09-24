import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Nav from "react-bootstrap/Nav";
import imgLogo from '../img/Logo-sala-de-belleza.jpg'

function Header() {
  return (
    <header >
      <div className="headermiddle">
        <div className="middleContainer">
          <img src={imgLogo} alt="Logo" id="logo" />
          <form action="">
            <input type="text" name="" id="buscador" />
          </form>
          <button>Iniciar Sesion</button>
        </div>
      </div>

      <div id="navContainer">
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/AboutUs">About us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Contacts">Contacts</Nav.Link>
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


