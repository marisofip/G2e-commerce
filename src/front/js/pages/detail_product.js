import React, { useState, useContext, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { DetailCard } from "../component/detail-card";

export const Detail = (props) => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDetailProduct(params.id);
  }, []);

  const product = store.productDetail;

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5 pt-5 productIMG">
          <div className="col">
            <div className="card mb-4 rounded-3">
              <div className="card-header py-3">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="400"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595C"></rect>
                  <text x="20%" y="50%" fill="#ECEEEF" dy=".3em">
                    Imagen Producto
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 mt-5 pt-5">
          <h1 className="productTitle">{product.nombre}</h1>
          <div className="row">
            <div className="col-6">
              <h2 className="priceProduct">$ {product.precio}</h2>
            </div>
            <div className="col-6">
              <select class="form-select" aria-label="Default select example">
                <option selected>Cantidad</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <hr />
          <div className="row description">
            <div className="productDescription">
              <p>{product.descripcion}</p>
            </div>
          </div>
          <div className="row addButtom">
            <div className="col 4">
              <button
                type="button"
                class="btn btn-success btn-md"
                onClick={() => {
                  actions.agregarCarShop(product.nombre);
                }}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="similarProducts">
        <h3 className="optionsProducts" style={{ textAlign: "center" }}>
          Productos Similares
        </h3>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <DetailCard />
        </div>
      </div>
    </div>
  );
};
Detail.propTypes = {
  match: PropTypes.object,
};
