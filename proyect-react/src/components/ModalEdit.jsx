import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { updateProducts } from "../services/PutProducts";

function ModalEditar({ editarProducto, producto }) {

    const [show, setShow] = useState(false);
    const [productoData, setProductoData] = useState({});
  
    useEffect(() => {
      setProductoData(producto);
    }, []);
  
    // console.log(productoData);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleChange = (e) => {
      const { name, value } = e.target; 
      setProductoData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async () => {
      try {
        await updateProducts(productoData.id);
        toast.success('Producto actualizado exitosamente', { autoClose: 1000 });
        handleClose();
      } catch (error) {
        console.error('Error updating product:', error);
        toast.error('Error al actualizar el producto', { autoClose: 1000 });
      }
    };



  return (
    <>
      <Button variant="warning" className="p-1" onClick={() => handleShow(producto)}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editando producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div id="contenedorPadre">
                <div>
                  <input type="file" name="Imagen" />
                </div>
    
                <div className="Productos">
                  <input type="text" name="Producto" id="" value={productoData.producto}  onChange={handleChange}/>
                </div>
    
                <div className="Descripcion">
                  <textarea name="Descripcion" placeholder="Describa el Producto" value={productoData.descripcion} onChange={handleChange}>
                  </textarea>
                </div>
    
                <div className="Etiquetas">
                  <input type="text" name="Etiqueta" placeholder="Añada etiqueta" value={productoData.etiqueta} onChange={handleChange} />
                </div>
    
                <div className="Precio">
                  <input type="number" name="Price" placeholder="Precio del producto"  value={productoData.precio}  onChange={handleChange}/>
                </div>
              </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Actualizar Producto</Button>
        </Modal.Footer>
      </Modal>
    </>
  );    
}

export default ModalEditar;
