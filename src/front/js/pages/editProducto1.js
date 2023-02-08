import React from 'react';
import { useState, useEffect, useContext  } from 'react';
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from '../store/appContext';
 
export const EditProduct= () => {
const {id} = useParams();
  const {store, actions}  = useContext(Context);

  useEffect(() => {
    
    actions.getDetailProduct(id)
  }, [])
  
  const product = store.productDetail
  
          return (
    
  

        <div className='container-fluid w-75 justify-content-center mt-5  mb-5'>
            <div className='row' style={{ height: '600px' }}>
                <div className='col-12'>
                    <h1 className='fw-normal bg-secondary text-white py-3 mb-5 rounded-3 text-center'>Editar Producto</h1>
                </div>
                <div className='col-6'>
                    <form key={product.id}>
                        <div className="form-group mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder={product.nombre}  />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="precio" className="form-label">Precio $</label>
                            <input type="number" className="form-control" id="precio" placeholder={product.precio}  />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="descripcion" className="form-label"> Descripción</label>
                            <textarea className="form-control" id="descripcion" rows="3" placeholder={product.descripcion} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="img" className="form-label">Imagen</label>
                            <input type="file" className="form-control" id="img" placeholder={product.img} />
                        </div>
                        <div className='col-12'>
                            <button className="btn btn-success m-2">Guardar</button>
                            <button type="button" className="btn btn-danger">Cancelar</button>
                        </div>
                    </form>
                </div>
             </div>
        </div >
       /* );
    })*/
    ) ;
}
EditProduct.propTypes = {
    match: PropTypes.object
  };