import React from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import '../styles/sidebar.css'
import ModalAdmin from './ModalsAgregar';
import ModalEditar from './ModalEdit';

const AdminDashboard = (agregarProductos) => {

  

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} className="sidebar">
            <Nav className="flex-column">
              <Nav.Item>
                  <ModalAdmin agregarProducto={agregarProductos}/>
              </Nav.Item>
              <Nav.Item>
                <Button variant="outline-danger" className="w-50 mb-2">
                  <FontAwesomeIcon icon={faTrash} /> Eliminar Producto
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button variant="outline-warning" className="w-50">
                  <FontAwesomeIcon icon={faEdit} /> Actualizar Product
                </Button>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;
