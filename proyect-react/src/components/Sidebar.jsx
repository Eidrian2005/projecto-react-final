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
            <Nav className='p-3'>
              <Nav.Item>
                  <ModalAdmin agregarProducto={agregarProductos}/>
              </Nav.Item>
            </Nav>
          
    </>
  );
};

export default AdminDashboard;
