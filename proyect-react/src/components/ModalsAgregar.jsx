import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { toast } from 'react-toastify';
import {PostProducts} from '../services/PostProducts'


function ModalAdmin({ agregarProducto }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [Producto, setProducto] = useState('')
  const [Descripcion, setDescripcion] = useState('')
  const [Etiquetas, setEtiqueta] = useState('')
  const [Precio, setPrecio] = useState('')



  function cargaProducto(event) {
    setProducto(event.target.value)
  }

  function cargaDescripcion(event) {
    setDescripcion(event.target.value)
  }

  function cargaEtiqueta(event) {
    setEtiqueta(event.target.value)
  }

  function cargarPrecio(event) {
    setPrecio(event.target.value)
  }

  function agregarProducto() {
    if (!Producto || !Descripcion || !Etiquetas || !Precio) {
      toast.warning('Por favor llenar todos los campos',{
          autoClose: 1000
      })
      
  } 
    PostProducts(Producto, Descripcion, Etiquetas, Precio)
    window.location.reload()
    toast.success('Tarea agregada exitosamente',{
        autoClose: 1000
    })
  }


  return (
    <>

<Container fluid>
<Row>
<Nav className="flex-column">
<Nav.Item>
<Button variant="outline-primary" className="w-50 mb-2" onClick={handleShow}>
<FontAwesomeIcon icon={faPlus} /> Añadir Productos
</Button>
</Nav.Item>
</Nav>
</Row>
</Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> 

<div id='contenedorPadre'>  

<div>
        <img src="" alt="productos agregados" />
</div>

<div className='Productos'>
        <label htmlFor="Producto">Producto</label>
        <input type="text"
        name="Producto" 
        id=""
        onChange={cargaProducto}
        />
</div>

<div className='Descripcion'>
        <textarea 
        name="" 
        placeholder='Describa el Producto' 
        id="" 
        value={Descripcion}
        onChange={cargaDescripcion}
        > </textarea>
</div>


<div className='Etiquetas'>
        <input 
          type="text" 
          onChange={cargaEtiqueta}
          placeholder='Añada etiqueta'
        />
</div>

<div className='Precio'>
        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          name="price"
          placeholder='Precio del producto'
          onChange={cargarPrecio}
        />
</div>  
</div> 
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={agregarProducto}>
            Agregar Producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdmin;
