import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import {Link, useParams} from "react-router-dom";
import { DetailCard } from "../component/detail-card";
import { NumericFormat } from 'react-number-format';


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
                        <img src={product.img} className="img-fluid rounded-start h-100" alt="..."/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 mt-5 pt-5">
                  <h1 className="productTitle">{product.nombre}</h1>
                  <div className="row">
                    <div className="col-6">
                      <NumericFormat value={product.precio} prefix="$" thousandSeparator="." decimalSeparator="," displayType="text" renderText={(value) => <h2>{value}</h2>}/>
                    </div>
                    <div className="col-6">
                      {/* <select id="select"
                        className="form-select"
                        aria-label="Default select example"
                      >                       
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select> */}
                      <input type="number" id="cantidad" name="cantidad" placeholder="Cantidad a comprar"/>
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
                          actions.agregarCarShop(product.id,product.nombre,product.precio,cantidad.value,product.img);
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
              <div className="row mt-5 mb-5">
                  <DetailCard/>
              </div>
            </div>
         
         );
       
};
