
import { GetProducts } from '../services/GetProducts';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import '../styles/productos.css'
import { Row, Col } from 'react-bootstrap';



export default function  ShowProducts() {
    
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



  return (
    <div className='Contenedor'>
      {productos.map((producto) => (
        <Row key={producto.id} className="mb-4">
          <Col md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={producto.imagenUrl} alt={producto.nombre} />
              <Card.Body>
                <Card.Title>{producto.producto}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Card.Text>{producto.etiqueta}</Card.Text>
                <Card.Text>{producto.precio}</Card.Text>
                <Button variant="primary">Ver detalles</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
}