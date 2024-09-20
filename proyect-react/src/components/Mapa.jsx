import React from "react"

const Mapa = () => {
    return (

        <div className="mapaCont">
            <div><h1>NUESTRA UBICACIÓN</h1></div>
            <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Av.+9,+Provincia+de+Puntarenas,+Chacarita,+Veinte+de+Noviembre,+Costa+Rica&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"

            ></iframe>
        </div>
    )
}
export default Mapa