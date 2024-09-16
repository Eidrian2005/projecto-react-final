import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import Sidebar from './Sidebar';
import ShowProducts from './ShowProducts';
import '../styles/headerAdmin.css'

export default function BodyAdmin() {
  return (
    <div>
      <div className='contenedorAdmin'>
        <Sidebar />
        <HeaderAdmin /> 
      </div>
        
      <div>
        <ShowProducts />
      </div>
    </div>
    
  )
}
