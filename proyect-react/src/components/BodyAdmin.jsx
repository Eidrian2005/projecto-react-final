import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import Sidebar from './Sidebar';
import ShowProducts from './ShowProducts';
import '../styles/headerAdmin.css';
import { Row, Col } from 'react-bootstrap';

export default function BodyAdmin() {
  return (
    <div>
      {/* Encabezado que ocupa toda la anchura */}
      <Row>
        <Col>
          <HeaderAdmin />
        </Col>
      </Row>
      
      {/* Contenedor principal con barra lateral y productos */}
      <Row>
        <Col xs={2} className='bg-body-tertiary py-5 '>
          <Sidebar />
        </Col>
        <Col xs={10} className='py-5 p-5'>
          <ShowProducts />
        </Col>
      </Row>
    </div>
  );
}
