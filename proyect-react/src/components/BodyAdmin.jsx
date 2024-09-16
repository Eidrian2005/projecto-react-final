import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import Sidebar from './Sidebar';
import ShowProducts from './ShowProducts';

export default function BodyAdmin() {
  return (
    <div>
        <HeaderAdmin />
        <Sidebar />
        <ShowProducts />
    </div>
    
  )
}
