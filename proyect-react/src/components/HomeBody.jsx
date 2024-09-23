import React, { useEffect, useState, useCallback} from 'react'
import UserCards from './cards'
import '../styles/HomeBody.css'
import { GetProducts } from '../services/GetProducts'
import imgLinea from '../img/linea-nutritiva.webp' 

const HomeBody = () => {
  
  const [productos, setProductos] = useState([]);
  const [filtradoDestacado, setFiltradoDestacado] = useState([]);

  const loadProducts = useCallback(async () => {
    try {
      const response = await GetProducts();
      setProductos(response);
      const destacados = response.filter((producto) =>
        producto.etiqueta.includes('Destacado')
      );
      setFiltradoDestacado(destacados);
    } catch (error) {
      console.error('Error fetching Products', error);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);
  


  return (
    <>
      <header className="featured-header">
        <div>
          <div>
            <h1>Destacados</h1>
          </div>
          <div>
          <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {filtradoDestacado.map((product) => (
          <div className="col mb-5" key={product.id}>
            <div className="card h-100">
              {product.sale && (
                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
                  Sale
                </div>
              )}
              <img className="card-img-top" src={imgLinea} alt={product.nombre} />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{product.producto}</h5>
                  {product.originalPrice && (
                    <span className="text-muted text-decoration-line-through">{product.descripcion}</span>
                  )}
                  <div>{product.precio}</div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">
                    {product.sale ? 'Add to cart' : 'View options'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
          </div>
        </div>
      </header>

      <div className="featured-products">
        {/* Render your featured products here */}
        <UserCards />
      </div>
    </>
  );
};

export default HomeBody;
