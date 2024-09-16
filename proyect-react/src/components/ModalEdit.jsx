{/*Zona de imports*/}
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { GetProducts } from '../services/GetProducts';
import { updateProducts } from '../services/PutProducts';
{/*Fin de la zona de imports*/}


function ModalEditar({editarProducto}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [producto, setProducto] = useState(productData.producto || '');
    const [descripcion, setDescripcion] = useState(productData.descripcion || '');
    const [etiquetas, setEtiqueta] = useState(productData.etiquetas || '');
    const [precio, setPrecio] = useState(productData.precio || '');


    async function editarProducto() {
        if (!Producto || !Descripcion || !Etiquetas || !Precio) {
            toast.warning('Por favor llenar todos los campos',{
            autoClose: 1000
        })
    } 
    const updatedProduct = {
        producto,
        descripcion,
        etiquetas,
        precio
    }
    try {
        await editProducts(productId, updatedProduct);
        toast.success('Producto actualizado exitosamente', {
            autoClose: 1000
        });
        handleClose(); 
    } catch (error) {
        toast.error('Error al actualizar el producto');
    }


      }

return (
    <>
<Container fluid>
    <Row>
        <Nav className="flex-column">
            <Nav.Item>
                <Button variant="outline-warning" className="w-50" onClick={handleShow}>
                    <FontAwesomeIcon icon={faEdit} /> Actualizar Producto
                </Button>
            </Nav.Item>
        </Nav>
    </Row>
</Container>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> <div id='contenedorPadre'>  

<div>
        <img src="" alt="productos agregados" />
</div>

<div className='Productos'>
        <label htmlFor="Producto">Producto</label>
        <input type="text"
        name="Producto" 
        id=""
        
        />
</div>

<div className='Descripcion'>
        <textarea 
        name="" 
        placeholder='Describa el Producto' 
        id="" 
        
        > </textarea>
</div>


<div className='Etiquetas'>
<input 
        type="text" 
        
        placeholder='Añada etiqueta'
        />
</div>

<div className='Precio'>
        <label htmlFor="price">Precio:</label>
        <input
        type="number"
        name="price"
        placeholder='Precio del producto'
        
        
        />
</div>  

    </div> </Modal.Body>
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

export default ModalEditar;  

