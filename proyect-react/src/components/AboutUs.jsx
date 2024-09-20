import React from 'react'
import Header from './Header'
import Mapa from './Mapa'
import { Row, Col, Form, Button } from 'react-bootstrap';
export default function AboutUsC() {
  return (
    <>
    <Header />
    <div className="container">
      <div className="row">
        {/* Columna de texto */}
        <div className="col-md-6">
          <h2>Texto Aquí</h2>
          <p>
            Aquí puedes poner el texto que desees. Puedes hablar sobre el tema que desees y agregar más detalles si lo necesitas.
          </p>
        </div>

        {/* Columna de mapa */}
        <div className="col-md-6">
          <h2>Mapa</h2>
          <div>
            <Mapa/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
