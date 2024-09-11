import React from "react";
import {Link} from 'react-router-dom'
import '../styles/Header.css'

function Header() {



    return(
        <header>

        <div className="headermiddle">

            <div className="middleContainer">

                <img src="" alt="Logo" id="logo"/>

                <form action="">
                    <input type="text" name="" id="buscador"/>
                </form>

                <button>Iniciar Sesion</button>

            </div>
        </div>


            <div id="navContainer">
                <nav className=""> 
                    <ul className="navegacion">

                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/AboutUs">About us</Link></li>
                        <li><Link to="/Contacts">Contacts</Link></li>

                    </ul>
                </nav>
            </div>
            

    </header>
    )
}

export default Header