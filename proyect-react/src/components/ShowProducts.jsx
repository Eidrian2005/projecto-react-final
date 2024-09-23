import { GetProducts } from '../services/GetProducts';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect, useCallback } from 'react';
import '../styles/productos.css';
import { Row, Col } from 'react-bootstrap';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteProducts } from '../services/DeleteProducts';
import { toast } from 'react-toastify';
import '../styles/img.css'
import ModalEditar from './ModalEdit';



export default function ShowProducts() {  

  const [productos, setProductos] = useState([]);

  const loadProducts = useCallback(() => {
    const fetchProductos = async () => {
      try{
        const response = await GetProducts()
        setProductos(response);
      } catch (error){
        console.error("Error fetching Products", error)
      }
    }
    fetchProductos()
  })

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  async function eliminarProducto(id) {
    await deleteProducts(id)
    loadProducts();
    toast.warning('Producto Eliminado exitosamente',{
      autoClose: 1000
  })
  }



loadProducts()
  return (
    <div>
      <Row className="flex-wrap">
        {productos.map((producto, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
            <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} id='imagen' />
              <Card.Body>
                <Card.Title>Producto:{producto.producto}</Card.Title>
                <Card.Text>Descrip:{producto.descripcion}</Card.Text>
                <Card.Text>Etiquetas:{producto.etiqueta}</Card.Text>
                <Card.Text>Precio:{producto.precio}</Card.Text>
                <Button variant="primary">Ver detalles</Button>
                <Button variant='danger' className='p-1 mx-2' onClick={() => eliminarProducto(producto.id)}>
                <FontAwesomeIcon icon={faTrash}/>
                </Button>
                <ModalEditar editarProducto={loadProducts} producto={producto} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

