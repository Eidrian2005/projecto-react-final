import React from 'react'
import UserCards from './cards'
import { Navigate, Link } from 'react-router-dom'
import '../styles/HomeBody.css'



const HomeBody = () => {
  
  return (
    <>
      <header className="bg-dark py-5">
        <div>
          <div>
            <h1>Destacados</h1>
          </div>
        </div>
      </header>

      <UserCards/>
    </>
  );
};

export default HomeBody;
