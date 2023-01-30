import React, { useState, useContext, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import {Link, useParams} from "react-router-dom";
import PropTypes from "prop-types";
import { DetailCard } from "../component/detail-card";



export const Detail = props  => {
    const {id} = useParams();
    const {store, actions}  = useContext(Context);

    useEffect(() => {
      
      actions.getDetailProduct(id)
    }, [])
    useEffect(() => {
      
      actions.getDetailProduct(id)
    }, [id])
    
    
    const product = store.productDetail
    
    
  return (
   
            <div className="container">
              <div className="row">
                <div className="col-6 mt-5 pt-5 productIMG">
                  <div className="col">
                    <div className="card mb-4 rounded-3">
                      <div className="card-header py-3">
                      <img
                    src={product.img}
                    className="img-fluid rounded-start h-100"
                    alt="..."
                  />
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
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >                       
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                  <hr />
                  <div className="row description">
                    <div className="productDescription">
                      <p>
                        {product.descripcion}
                      </p>
                    </div>
                  </div>
                  <div className="row addButtom">
                    <div className="col 4">
                      <button
                        type="button"
                        className="btn btn-success btn-md"
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
                  <DetailCard/>
                </div>
              </div>
            </div>
         
         );
       
};
Detail.propTypes = {
  match: PropTypes.object
};