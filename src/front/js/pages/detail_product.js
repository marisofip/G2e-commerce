import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Detail = () => {
    const { store, actions } = useContext(Context);
   
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
                    <h1 className="productTitle">
                        Nombre de Producto
                    </h1>
                    <div className="row">
                        <div className="col-6">
                            <h2 className="priceProduct">
                                1.200$
                            </h2>
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
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                    <div className="row addButtom">
                        <div className="col 4">
                            <button type="button" class="btn btn-success btn-md"  onClick={() => { actions.agregarCarShop("Nombre del Producto") }}>Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="similarProducts">
                <h3 className="optionsProducts" style={{ textAlign: 'center' }}>
                    Productos Similares
                </h3>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <svg
                                    className="bd-placeholder-img card-img-top"
                                    width="100%"
                                    height="150"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595C"></rect>
                                    <text x="20%" y="50%" fill="#ECEEEF" dy=".3em">
                                        Imagen{" "}
                                    </text>
                                </svg>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Producto 1</h5>
                                    <p className="card-text">30.000$</p>
                                    <a href="#" className="btn btn-dark">
                                        Ver
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <svg
                                    className="bd-placeholder-img card-img-top"
                                    width="100%"
                                    height="150"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595C"></rect>
                                    <text x="20%" y="50%" fill="#ECEEEF" dy=".3em">
                                        Imagen{" "}
                                    </text>
                                </svg>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Producto 2</h5>
                                    <p className="card-text">30.000$</p>
                                    <a href="#" className="btn btn-dark">
                                        Ver
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <svg
                                    className="bd-placeholder-img card-img-top"
                                    width="100%"
                                    height="150"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595C"></rect>
                                    <text x="20%" y="50%" fill="#ECEEEF" dy=".3em">
                                        Imagen{" "}
                                    </text>
                                </svg>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Producto 3</h5>
                                    <p className="card-text">30.000$</p>
                                    <a href="#" className="btn btn-dark">
                                        Ver
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
