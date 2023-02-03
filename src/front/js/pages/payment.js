import React,  { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TotalCompra } from "../component/totalcompra";

export const Payments = () => {
  const [cart, setCart] = useState({});
	const [preference, setPreference] = useState(null);
  
  const createPreference = async () => {
		try {
			const resp = await fetch(`${process.env.BACKEND_URL}/api/preference`, {  
				method: 'POST', 
				body: JSON.stringify(cart),
				headers: { 'Content-Type': 'application/json'}

			})
			const data = await resp.json();
			setPreference(data)
			
		} catch (error) {
			
		}
	}

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <hr />
          <h1
            className="tittlePayment fw-normal bg-secondary text-white py-3 mb-5 rounded-3 text-center"
            style={{ textAlign: "center" }}
          >
            Pago
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="payForm">
            <form action="" id="formulario">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div
                        className="alert alert-danger mt-3"
                        role="alert"
                        hidden
                        id="alertError"
                      >
                        ¡Deben completarse todos los campos del formulario!
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-5">
                      <label for="Card"> Numero de Tarjeta </label>
                      <br />
                      <input
                        type="text"
                        name="Card"
                        id="Card"
                        placeholder="xxxxxxxxxxxx"
                        className="form-control "
                      />
                    </div>
                    <div className="col-md-3">
                      <label for="number"> CVC </label>
                      <br />
                      <input
                        type="text"
                        name="number"
                        id="number"
                        placeholder="000"
                        className="form-control "
                      />
                    </div>
                    <div className="col-md-4">
                      <label for="cantidad"> Monto </label>
                      <br />
                      <input
                        type="text"
                        name="cantidad"
                        id="cantidad"
                        placeholder="Monto a pagar"
                        className="form-control "
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label for="name">Nombre</label>
                      <br />
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="name"> Apellido</label>
                      <br />
                      <input
                        type="text"
                        name="apellido"
                        id="apellido"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label for="City">Region</label>
                      <br />
                      <input
                        type="text"
                        name="City"
                        id="City"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-3">
                      <label for="State">Ciudad</label>
                      <br />
                      <select
                        name="State"
                        id="State"
                        className="form-control pb-2"
                      >
                        <option value="">Comuna</option>
                        <option value="Florida">Santiago</option>
                         </select>
                    </div>
                    <div className="col-md-3">
                      <label for="PostalCode">Codigo Postal</label>
                      <br />
                      <input
                        type="text"
                        name="PostalCode"
                        id="PostalCode"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3">
                      <div className="bg-secondary h-auto rounded form-control">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadio1"
                          >
                            <i className="fab fa-cc-mastercard "></i>
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadio2"
                          >
                            <i className="fab fa-cc-visa"></i>
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option3"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadio3"
                          >
                            <i className="fab fa-cc-diners-club"></i>
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio4"
                            value="option4"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadio3"
                          >
                            <i className="fab fa-cc-amex"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <textarea
                        name="comentario"
                        id="comentario"
                        cols="30"
                        rows="5"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-muted">
                  <div className="row">
                    <div className="col-md-12 d-flex">
                     <Link to="/shopping-cart"><button type="button" className="btn btn-secondary">
                        Cancelar
                      </button> </Link> 
                     <Link to="/pay_success"> <button type="submit" className="btn btn-primary ml-2">
                        Enviar Datos
                      </button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <script
              src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
              integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
              crossorigin="anonymous"
            ></script>
            <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
              crossorigin="anonymous"
            ></script>
            <script src="main.js"></script>
          </div>
        </div>
        <div className="col-6 sumary">
          <TotalCompra />
        <button type="submit" className="btn outline-success" onClick={createPreference}>
                      <img src="data:image/png;base64,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"/>
                      </button>
        </div>
      </div>
    </div>
  );
};
