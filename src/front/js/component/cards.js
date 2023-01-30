import React, { useContext } from "react";
import ImageUrl from "../../img/fondo.png";
import {Link} from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = () => {
    const { store } = useContext(Context);
    return (
      <>
        {store.categorias !== null &&
          store.categorias.length > 1 &&
          store.categorias.map((categorias, index) => {
            return (
            <div className="card mx-auto my-2" key={categorias.id} style={{ width: '33rem' }}>
                <img src={categorias.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{categorias.nombre}</h5>
                    <p className="card-text">{categorias.descripcion}</p>
                    <Link to={"/detail_category/"+ categorias.id} className="btn btn-primary ">Ir a categoría</Link>
                </div>
            </div>
          );
        })}
    </>
  );
};
