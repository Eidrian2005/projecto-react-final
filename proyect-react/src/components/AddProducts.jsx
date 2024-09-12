import {PostProducts} from '../services/PostProducts'
import {GetProducts} from '../services/GetProducts'
import { updateProducts } from '../services/PutProducts'
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Sidebar from './Sidebar';


export default function AddProducts() {

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
      
      return;
  }


    PostProducts(Producto, Descripcion, Etiquetas, Precio)
    window.location.reload()
    toast.success('Tarea agregada exitosamente',{
        autoClose: 1000
    })
  }
  





  return (


// <div id='contenedorPadre'>  

<div>
<Sidebar />
</div>

// <div>
//         <img src="" alt="productos agregados" />
// </div>

// <div className='Productos'>
//         <label htmlFor="Producto">Producto</label>
//         <input type="text"
//         name="Producto" 
//         id=""
//         onChange={cargaProducto}
//         />
// </div>

// <div className='Descripcion'>
//         <textarea 
//         name="" 
//         placeholder='Describa el Producto' 
//         id="" 
//         value={Descripcion}
//         onChange={cargaDescripcion}
//         > </textarea>
// </div>


// <div className='Etiquetas'>
// <input 
//         type="text" 
//         onChange={cargaEtiqueta}
//         placeholder='Añada etiqueta'
//         />
// </div>

// <div className='Precio'>
//         <label htmlFor="price">Precio:</label>
//         <input
//           type="number"
//           name="price"
//           placeholder='Precio del producto'
//           onChange={cargarPrecio}
//         />
// </div>  


// <div>
//         <button className='' onClick={agregarProducto}>Agregar Producto</button>
// </div>

//     </div>
  )
}
