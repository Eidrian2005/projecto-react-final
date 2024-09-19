import React from 'react'
import UserCards from './cards'
import { Navigate, Link } from 'react-router-dom'
import '../styles/HomeBody.css'



const HomeBody = () => {
  
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop homepage template
            </p>
          </div>
        </div>
      </header>

      <UserCards/>
    </>
  );
};

export default HomeBody;
