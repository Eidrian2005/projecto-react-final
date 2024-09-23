import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";
import "../styles/texto.css";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

export default function Contactos() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9px9ejk', 'template_qxnn73g', form.current, {
        publicKey: 'W6APx_9CzePgQNPIv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };





  return (
    <>
      <Header />
      <Row>
        <Col md={6}> <div id="padre">
        <section>
          <div>
            <h1 id="Grupoice"></h1>
            <div class="textoinicio">
              <p class="textoP">
              <h2 class="textoA">Contactos</h2>
                Ponemos a disposición los siguientes canales donde puede
                realizar cualquier consulta y solicitud:
              </p>
              <p class="textoP">— Telefono: 20007720</p>
              <p class="textoP">— Correo electrónico: Example@gmail.com</p>
            </div>
          </div>
          <div>
            <div>
      
            </div>
          </div>
        </section>
      </div></Col>
        <Col md={5}> <Form ref={form} onSubmit={sendEmail}>
      {/* Fila con dos columnas */}
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre" name="user_name"/>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email"  name="user_email"/>
          </Form.Group>
        </Col>
      </Row>

      {/* Dos inputs adicionales debajo */}
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formBasicText1">
          <Form.Control as="textarea" rows={3} placeholder="Escribe tu descripción aquí..." name="message" />
          </Form.Group>
        </Col>
      </Row>

      {/* Botón de envío */}
      <input type="submit" value="Send"  />
    </Form>
    
    </Col>
      </Row>
     
      <Footer />
    </>
  );
}
