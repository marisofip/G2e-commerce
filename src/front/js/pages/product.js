import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';


export const Product = () => {
  const { store } = useContext(Context);
  return (
    <>
      <div className="container  justify-content-center mt-5  mb-5">
        <h1
          h1 className='fw-normal bg-secondary text-white py-3 mb-5 rounded-3 text-center'
          style={{ textAlign: "center", boxShadow: "0.2" }}
        >
         Productos
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre Producto</th>
          
            </tr>
          </thead>
          <tbody>
          {         
          store.products !== null &&
        store.products.length > 0 &&
        store.products.map((products, index) => {
             return (
            <tr key={products.id}>
            <td>{products.id}</td>
            <td>{products.nombre}
            
              <Link
                className="border border-0 bg-transparent float-md-end"
                to={"/edit_product/" + products.id }
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
