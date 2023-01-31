import React from 'react';

export const Payments = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <hr />
                    <h1 className='tittlePayment fw-normal bg-secondary text-white py-3 mb-5 rounded-3 text-center' style={{ textAlign: 'center' }}>
                        Pago
                    </h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='payForm'>
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
                                            <label for="Card"> Card# </label><br />
                                            <input
                                                type="text"
                                                name="Card"
                                                id="Card"
                                                placeholder="xxxxxxxxxxxx"
                                                className="form-control "
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label for="number"> CVC# </label><br />
                                            <input
                                                type="text"
                                                name="number"
                                                id="number"
                                                placeholder="000"
                                                className="form-control "
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label for="cantidad"> Amount </label><br />
                                            <input
                                                type="text"
                                                name="cantidad"
                                                id="cantidad"
                                                placeholder="Amount"
                                                className="form-control "
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label for="name">Name</label><br />
                                            <input type="text" name="name" id="name" className="form-control" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="name"> Last Name</label><br />
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
                                            <label for="City">City</label><br />
                                            <input type="text" name="City" id="City" className="form-control" />
                                        </div>
                                        <div className="col-md-3">
                                            <label for="State">State</label><br />
                                            <select name="State" id="State" className="form-control pb-2">
                                                <option value="">Pick State</option>
                                                <option value="Florida">Florida</option>
                                                <option value="California">California</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <label for="PostalCode">Postal Code</label><br />
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
                                                    <label className="form-check-label" for="inlineRadio1"
                                                    ><i className="fab fa-cc-mastercard "></i
                                                    ></label>
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
                                                    <label className="form-check-label" for="inlineRadio2"
                                                    ><i className="fab fa-cc-visa"></i
                                                    ></label>
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
                                                    <label className="form-check-label" for="inlineRadio3"
                                                    ><i className="fab fa-cc-diners-club"></i
                                                    ></label>
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
                                                    <label className="form-check-label" for="inlineRadio3"
                                                    ><i className="fab fa-cc-amex"></i
                                                    ></label>
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
                                            <button type="button" className="btn btn-secondary">Cancel</button>
                                            <button type="submit" className="btn btn-primary ml-2">Send</button>
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
                <div className='col-6 sumary'>
                    <hr />
                    <h4 className='titleDetallePago' style={{ textAlign: 'center' }} >Detalle de Pago</h4>
                    <hr />
                    <div className='row'>
                        <div className='col-6 subTotal'>
                            <h5>
                                Sub Total :
                            </h5>

                        </div>
                        <div className='col-6 numbSubTotal'>
                            <h5>
                                150.000$
                            </h5>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 subTotal'>
                            <h5>
                                Total Envio :
                            </h5>

                        </div>
                        <div className='col-6 numbSubTotal'>
                            <h5>
                                5.000$
                            </h5>

                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-6 subTotal'>
                            <h5>
                                Total de Compra :
                            </h5>

                        </div>
                        <div className='col-6 numbSubTotal'>
                            <h5>
                                155.000$
                            </h5>

                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='paymentButtom col-6' style={{ contentAling: 'end' }}>
                </div>
                <div className='paymentButtom2 col-6'>

                    <button type="button" class="btn btn-success m-2">Pagar</button>
                    <button type="button" class="btn btn-danger">Cancelar</button>
                </div>
            </div>
        </div>

    )
};