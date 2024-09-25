import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import Contactos from '../components/Contactos'
import Footer from "../components/Footer";
export default function Contacts() {
  return (
    <>
    <Contactos />
    <br />
    <Footer/>
    </>
  )
}
