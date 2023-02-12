import React,  { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TotalCompra } from "../component/totalcompra";
import { Context } from "../store/appContext";
import btnImageUrl from "../../img/mercadopago-boton.png";


export const Payments = () => {
  const [cart, setCart] = useState([]);
	const [preference, setPreference] = useState(null);
  const { store, actions } = useContext(Context);
  const [fp, setFp] = useState("trf");
  const [inputs, setInputs] = useState({});
  const mp = new MercadoPago(process.env.PUBLIC_KEY, {
    locale: 'es-AR'
  });

  const createPreference = async () => {
		try {
      // store.carShopping
      // Antes cart
      // Antes body: JSON.stringify(store.carShopping),
        const resp = await fetch(`${process.env.BACKEND_URL}/api/preference`, {  
          method: 'POST', 
          body: JSON.stringify(store.carShopping),
          headers: { 'Content-Type': 'application/json'}

        })
        const data = await resp.json();
        console.log("volviendo de preference")
        console.log(data)
        setPreference(data)
        console.log(data.preference.id)
        mp.checkout({
          preference: {
            id: data.preference.id
          },
          render: {
            container: '.cho-container', // Class name where the payment button will be displayed
            label: 'Pgar', // Change the payment button text (optional)
          }
        });
		  } catch (error) {
		  }
	}
  useEffect(() => {
    createPreference();
  }, []); // <- add empty brackets here
  const onChangeValue = (el) => {
    setFp(el.target.value);
    console.log(el.target.value);

  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
  }
  
  return (
    <div className="container text-center" style={{height:"680px"}}>
      <div className="row">
        <div className="col">
          <hr />
          <h1 className="tittlePayment fw-normal bg-secondary text-white py-3 mb-5 rounded-3 text-center" style={{ textAlign: "center" }}>
            Pago
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-8 text-start">
          <h5>Seleccione forma de pago</h5>
          <div onChange={onChangeValue}>
            <input className="me-2" type="radio" value="trf" name="fp" checked={fp === 'trf'} />Transferencia Bancaria
            <label>
            <input className="me-2 ms-2" type="radio" value="mp" name="fp" checked={fp === 'mp'} />
            <img className="img-fluid" src={btnImageUrl} style={{ width: "80%", height:"45px"}}/>
            </label>
          </div> 
          <div className={fp==="mp" ? "cho-container visible" : "cho-container invisible"}  ></div>
          {fp === "trf" && 
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <h5 className="fst-italic">Datos de la transferencia</h5>
                  <div className="col-8">
                    <label className="form-label">Nombre Titular</label>
                    <input  className="form-control" 
                      type="text" 
                      name="name" 
                      value={inputs.name || ""} 
                      onChange={handleChange}
                    />                    
                  </div>
                  <div className="col-4">
                  <label className="form-label">Fecha Operación</label>
                    <input className="form-control"
                      type="date" 
                      name="date" 
                      value={inputs.date || ""} 
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Nombre Banco</label>
                    <input className="form-control"
                      type="text" 
                      name="namebank" 
                      value={inputs.namebank || ""} 
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Número Operación</label>
                    <input className="form-control"
                      type="text" 
                      name="nop" 
                      value={inputs.nop || ""} 
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex gap-4 d-md-flex justify-content-md-start pt-5">
                    <button className="btn btn-success mt-5 ">Guardar</button>
                    <Link className="btn btn-secondary mt-5 " type="button" to="/shipping">
                      Cancelar
                    </Link>
                   </div>
                </div>
              </form>
          }
        </div>
        <div className="col border-start border-info border-2">
          <TotalCompra />
        </div>
      </div>
    </div>
  );
};
