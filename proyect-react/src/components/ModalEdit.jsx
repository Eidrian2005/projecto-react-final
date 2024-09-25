import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { updateProducts } from "../services/PutProducts";
import { toast } from "react-toastify";

function ModalEditar({ producto }) {
  const [show, setShow] = useState(false);
  const [productoData, setProductoData] = useState({
    producto: '',
    descripcion: '',
    etiqueta: '',
    precio: 0,
    imagen: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setProductoData(producto); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductoData((prevData) => ({
          ...prevData,
          imagen: reader.result, // Esto establece la imagen en base64
        }));
      };
      reader.readAsDataURL(file); // ESto me lee la imagen como base64
    }
  };

  const handleSubmit = async () => {
    try {
      await updateProducts(productoData);
      toast.success('Producto actualizado exitosamente', { autoClose: 1000 });
      handleClose();
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Error al actualizar el producto', { autoClose: 1000 });
    }
  };
  
  return (
    <>
      <Button variant="warning" className="p-1" onClick={handleShow}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editando producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="contenedorPadre">
            <div>
              <input type="file" name="imagen" onChange={handleImageChange} />
            </div>

            <div className="Productos">
              <input
                type="text"
                name="producto"
                value={productoData.producto}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div className="Descripcion">
              <textarea
                name="descripcion"
                placeholder="Describa el Producto"
                value={productoData.descripcion}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div className="Etiquetas">
              <input
                type="text"
                name="etiqueta"
                placeholder="Añada etiqueta"
                value={productoData.etiqueta}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div className="Precio">
              <input
                type="number"
                name="precio"
                placeholder="Precio del producto"
                value={productoData.precio}
                onChange={handleChange}
                autoComplete="off"
              />
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
