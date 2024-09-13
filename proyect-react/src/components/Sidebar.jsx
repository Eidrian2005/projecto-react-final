// AdminDashboard.js
import React from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import '../styles/sidebar.css'




const AdminDashboard = () => {
  return (

    


    <Container fluid>

      <Row>

        <Col xs={2} className="bg-light sidebar py">
          <Nav className="flex-column">
            <Nav.Item>
              <Button variant="outline-primary" className="w-50 mb-2">
                <FontAwesomeIcon icon={faPlus} /> Añadir Producto
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="outline-danger" className="w-50 mb-2">
                <FontAwesomeIcon icon={faTrash} /> Eliminar Producto
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="outline-warning" className="w-50">
                <FontAwesomeIcon icon={faEdit} /> Actualizar Producto
              </Button>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
