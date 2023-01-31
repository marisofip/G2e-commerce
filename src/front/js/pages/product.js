import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';


export const Product = () => {
  const { store } = useContext(Context);
  return (
    <>
      <div className="container  justify-content-center mt-5  mb-5">
        <h1
          className="fw-normal p-0 shadow-none p-5 mb-5 bg-light rounded-4 border border-dark"
          style={{ textAlign: "center", boxShadow: "0.2" }}
        >
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar Productos"
              aria-label="Search"
            ></input>{" "}
            <img src="https://img.icons8.com/material-outlined/2x/search.png" />{" "}
          </form>
        </h1>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre Producto</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody>
          {         
          store.products !== null &&
        store.products.length > 1 &&
        store.products.map((products, index) => {
             return (
            <tr key={products.id}>
            <td>{products.id}</td>
            <td>{products.nombre}</td>
            <td>
              {" "}
              20{" "}
            
              <Link
                className="border border-0 bg-transparent float-md-end"
                to="/edit_product"
              >
                <i className="fa-solid fa-pencil fa-xl text-body"/>
              </Link>
            </td>
          </tr>
            );
             })}
                                  
          </tbody>
        </table>

        <div className="d-grid gap-4 d-md-flex justify-content-md-center pt-5">
          <Link
            className="btn btn-success mt-5 "
            type="button"
            to="/create_product"
          >
            Crear Producto
          </Link>
          <button className="btn btn-secondary mt-5 " type="button">
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};
