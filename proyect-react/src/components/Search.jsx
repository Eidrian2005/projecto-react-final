import React, { useEffect, useState } from 'react';
import { GetProducts } from "../services/GetProducts";

export default function Search() {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    GetProducts()
      .then((data) => {
        setRecords(data);
      })
      .catch((error) => {
        console.error("Error fetching products", error);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = records.filter((product) =>
      product.producto.toLowerCase().includes(value)
    );
    setFilteredRecords(filtered);
  };

  return (
    <>
      <header className="featured-header">
        <div>
          <h1>Filtrado por búsqueda</h1>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <section className="py-5">
          <div className="px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {searchTerm && filteredRecords.length > 0 ? (
                filteredRecords.map((d, i) => (
                  <div className="col mb-5" key={i}>
                    <div className="card h-100">
                      {d.sale && (
                        <div
                          className="badge bg-dark text-white position-absolute"
                          style={{ top: "0.5rem", right: "0.5rem" }}
                        >
                          Sale
                        </div>
                      )}
                      <img
                        className="card-img-top"
                        src={d.imagen}
                        alt={d.nombre}
                      />
                      <div className="card-body p-4">
                        <div className="text-center">
                          <h5 className="fw-bolder">{d.producto}</h5>
                          {d.originalPrice && (
                            <span className="text-muted text-decoration-line-through">
                              {d.descripcion}
                            </span>
                          )}
                          <div>{d.precio}</div>
                        </div>
                      </div>
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <a className="btn btn-outline-dark mt-auto" href="#">
                            {d.sale ? "Add to cart" : "View options"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                searchTerm && <p>No se encontraron productos.</p> // Mensaje si no hay resultados
              )}
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
