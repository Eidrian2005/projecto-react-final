import React from "react";
import {Link} from 'react-router-dom'

function Header() {
    return(
        <header>

        <div className="headermiddle">
            <form action="">
                <input type="text" name="" id="" />
            </form>
        </div>


            <div>
                <nav> 
                    <ul className="navegacion">

                    <header id="cabecera">
                        <div id="contenedorBtn">
                            <button id="btnLog">Log out</button>
                            <button id="btnHist">Historial</button>
                        </div>
                    </header>




                        <li><Link to="/">Home</Link></li>
                        <li><Link to="">example</Link></li>
                        <li><Link to="">example</Link></li>
                        <li><Link to="">example</Link></li>

                    </ul>
                </nav>
            </div>
            

    </header>
    )
}

export default Header