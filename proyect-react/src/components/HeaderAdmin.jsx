// Header.js
import React from 'react';
import '../styles/header.css'
// Importa el archivo CSS
import { FaSearch } from 'react-icons/fa'; // Importa el icono de lupa

const Header = () => {
  return (
    <header className="header">
      <div className="search-container">
        <input type="text" placeholder="Buscar..." className="search-input" />
        <FaSearch className="search-icon" />
      </div>
    </header>
  );
};

export default Header;
