import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

export const Categoria = () => {
    const { store } = useContext(Context);
    return (
        <div className='container-fluid w-75 justify-content-center mt-5  mb-5'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='fw-normal bg-secondary text-white py-3 mb-5 rounded-3 text-center'>Categorías</h1>
                </div>
                    <div className='col'>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NOMBRE</th>
                                    <th>DESCRIPCIÓN</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td>1</td>
                                    <td>Tecnologia</td>
                                    <td className="text-center">
                                        <Link className="border border-0 bg-transparent" to="/detalle_pedido">
                                            <i className="fa-solid fa-pencil fa-2xl text-body"/>
                                        </Link>
                                    </td> */}
                                    {store.categorias !== null &&
                                     store.categorias.length > 1 &&
                                     store.categorias.map((categorias, index) => {
                                        return (
                                            <tr key={categorias.id}>
                                                <td>{categorias.id}</td>
                                                <td>{categorias.nombre}</td>
                                                <td>{categorias.descripcion}</td>
                                                <td className='text-center'>
                                                <Link className="border border-0 bg-transparent" to="/createCategory">
                                                    <i className="fa-solid fa-pencil fa-xl text-body"/>
                                                </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                {/* </tr> */}
                            </tbody>
                        </table>
                        <div className="d-grid gap-4 d-md-flex justify-content-md-end">
                            <button className="btn btn-secondary mt-2" type="button">
                                Cancelar
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}