import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TotalCompra } from "../component/totalcompra";

export const Shipping = () => {
  return (
    <>
      <div className="container  justify-content-center mt-5  mb-5">
        <h1
          className="fw-normal  p-0 shadow-none p-3 mb-5 bg-light rounded-4 border border-dark"
          style={{ textAlign: "center", boxShadow: "0.2" }}
        >
          Datos de Despacho
        </h1>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <TotalCompra />
          </div>

          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Direcion de envio</h4>
            <form className="needs-validation" novalidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label for="firstName" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div className="invalid-feedback">Es requerido.</div>
                </div>

                <div className="col-sm-6">
                  <label for="lastName" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div className="invalid-feedback">Es requerido.</div>
                </div>

                <div className="col-12">
                  <label for="email" className="form-label">
                    Correo
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="juan@gmail.com"
                  />
                  <div className="invalid-feedback">Es requerido.</div>
                </div>

                <div className="col-12">
                  <label for="address" className="form-label">
                    Direccion{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Calle ejemplo"
                    required=""
                  />
                  <div className="invalid-feedback">Es requerido.</div>
                </div>

                <div className="col-md-6">
                  <label for="country" className="form-label">
                    Comuna
                  </label>
                  <select className="form-select" id="country" required="">
                    <option value="">Elige...</option>
                    <option>Ejemplo Comuna</option>
                  </select>
                  <div className="invalid-feedback">
                    Selecciona una opcion valida.
                  </div>
                </div>

                <div className="col-md-6">
                  <label for="state" className="form-label">
                    Ciudad
                  </label>
                  <select className="form-select" id="state" required="">
                    <option value="">Elige...</option>
                    <option>Ejemplo ciudad</option>
                  </select>
                  <div className="invalid-feedback">
                    Selecciona una opcion valida.
                  </div>
                </div>

                <div className="col-md-6">
                  <label for="zip" className="form-label">
                    Codigo Postal
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Es requerido.</div>
                </div>
                <div className="col-md-6">
                  <label for="zip" className="form-label">
                    Telefono{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Es requerido.</div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr />

        <div className="d-grid gap-4 d-md-flex justify-content-md-start pt-5">
          <Link className="btn btn-success mt-5 " type="button" to="/payment">
            Siguiente
          </Link>
          <button className="btn btn-secondary mt-5 " type="button">
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};
