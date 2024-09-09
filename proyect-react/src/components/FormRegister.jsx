import React, { useState  } from 'react';
import '../styles/sesion.css'
import { PostUsers } from '../services/PostUsers'
import {Link, useNavigate} from 'react-router-dom'

function FormRegister() {

    const navigate = useNavigate()
    const [usuario, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [contrasenia, setPassword] = useState('');


    function  cargaUsuario(event) {
    setUsername(event.target.value);
    }

    function cargaEmail(event) {
    setEmail(event.target.value);
    }

    const cargaContra = (event) => {
    setPassword(event.target.value);
    };

    const cargar = (e) => {
        e.preventDefault()

        

        console.log('Nombre:', usuario);
        console.log('Contraseña:', contrasenia);

        PostUsers(usuario, email, contrasenia)

        navigate("/Login")
    
    
;
};



return(

    <div className="container">

    <div className="panel">

        <h2>Registro</h2>

        <div className="">

            <form className="" onSubmit={cargar} id="registroCuenta">

                <div className="form-grupo">
                    <label htmlFor="usuario1" className="form-label">Nombre:</label>

                    <input 
                    className="estilosInput" 
                    type="text" 
                    id="usuario1" 
                    value={usuario}
                    onChange={cargaUsuario}
                    required/>

                </div>

                <div className="form-grupo">
                    <label htmlFor="Email1" className="form-label">Correo electronico:</label>

                    <input 
                    className="estilosInput" 
                    type="email" 
                    id="Email1"
                    value={email}
                    onChange={cargaEmail}
                    required />

                </div>

                <div className="form-grupo">
                    <label htmlFor="Password1" className="" >Contraseña:</label>

                    <input  
                    className="estilosInput" 
                    type="password" 
                    id="Password1" 
                    name="password" 
                    value={contrasenia}
                    onChange={cargaContra}
                    required />

                </div>

                <button className="btnestilo" type='submit' id="guardar">Crear cuenta</button>

                

                <br/>
                <p>¿Ya tienes cuenta? <Link to="/Login">Inicia Sesion</Link></p>

            </form>

        </div>  

    </div>

</div>
)

}

export default FormRegister;