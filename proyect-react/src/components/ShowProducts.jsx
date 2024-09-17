import { GetProducts } from '../services/GetProducts';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import '../styles/productos.css';
import { Row, Col } from 'react-bootstrap';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteProducts } from '../services/DeleteProducts';
import imgLinea from '../img/linea-nutritiva.webp' 


export default function ShowProducts() {  
  const [productos, setProductos] = useState([]);



  useEffect(() => {
    async function fetchProductos() {
      try {
        const productsData = await GetProducts();
        setProductos(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProductos();
  }, []);

  async function eliminarProducto(id) {
    await deleteProducts(id)
    window.location.reload()
  }
  

  return (
    <div>
      <Row className="flex-wrap">
        {productos.map((producto, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={imgLinea} alt={producto.nombre} />
              <Card.Body>
                <Card.Title>{producto.producto}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Card.Text>{producto.etiqueta}</Card.Text>
                <Card.Text>{producto.precio}</Card.Text>
                <Button variant="primary">Ver detalles</Button>
                <Button variant='danger' className='p-1 mx-2' onClick={() => eliminarProducto(producto.id)}>
                <FontAwesomeIcon icon={faTrash}/>
                </Button>
                <Button variant="warning" className='p-1'>
                <FontAwesomeIcon icon={faEdit} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
