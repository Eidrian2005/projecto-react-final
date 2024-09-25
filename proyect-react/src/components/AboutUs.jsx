import React from 'react'
import Header from './Header'
import Mapa from './Mapa'

export default function AboutUsC() {
  return (
    <>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Sobre Nosotros</h2>
          <p>
            Te ofrecemos variedad de productos en marcas reconocidas obteniendo resultados exitosos ademas de cortres modernos y alisados con nuevas tecnologias.
          </p>
          <h2>Horario de atencion</h2>
          <p>
            Lunes cerrado martes a sabado de 9:00am a 7:00pm
            domingo de 10:00am a 2:30pm
          </p>
        </div>


        <div className="col-md-6">
          <div>
            <Mapa/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
