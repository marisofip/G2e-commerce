import React, { useContext } from "react";
import ImageUrl from "../../img/fondo.png";
import { Context } from "../store/appContext";

export const Card = () => {
    const { store } = useContext(Context);
    return (
      <>
        {store.categorias !== null &&
          store.categorias.length > 1 &&
          store.categorias.map((categorias, index) => {
            return (

            <div className="card mx-auto my-1" style={{ width: '33rem' }}>
                <img src={ImageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{categorias.nombre}</h5>
                    <p className="card-text">{categorias.descripcion}</p>
                    <a href="#" className="btn btn-primary">Ir a categoría</a>
                </div>
            </div>
 );
})}
</>

    );
}