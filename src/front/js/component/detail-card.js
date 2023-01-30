import React, { useContext } from "react";
import ImageUrl from "../../img/fondo.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Detail } from "../pages/detail_product";

export const DetailCard = () => {
  const { store } = useContext(Context);
  return (
    <>
      {store.products !== null &&
        store.products.length > 1 &&
        store.products.map((products, index) => {
          return (
            <div className="card mb-3" key={products.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={products.img}
                    className="img-fluid rounded-start h-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{products.nombre}</h5>
                    <p className="card-text">$ {products.precio}</p>
                    <Link
                      to={"/detail_product/" + products.id}
                      className="btn btn-primary"
                    >
                      Ver
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
