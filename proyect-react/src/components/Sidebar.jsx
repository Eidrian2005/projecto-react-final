// AdminDashboard.js
import React from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import '../styles/sidebar.css'
import Header from './HeaderAdmin';



const AdminDashboard = () => {
  return (

    


    <Container fluid>
      <div>
      <Header />
      </div>

      <Row>

        {/* Columna izquierda para el menú */}
        <Col xs={2} className="bg-light sidebar py">
          <Nav className="flex-column">
            <Nav.Item>
              <Button variant="outline-primary" className="w-100 mb-2">
                <FontAwesomeIcon icon={faPlus} /> Añadir Producto
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="outline-danger" className="w-100 mb-2">
                <FontAwesomeIcon icon={faTrash} /> Eliminar Producto
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="outline-warning" className="w-100">
                <FontAwesomeIcon icon={faEdit} /> Actualizar Producto
              </Button>
            </Nav.Item>
          </Nav>
        </Col>
        {/* Columna derecha para el contenido principal */}
        <Col xs={10} className="content">
          <div className="p-3">
            <h1>Contenido Principal</h1>
            {/* Aquí va tu contenido principal */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
