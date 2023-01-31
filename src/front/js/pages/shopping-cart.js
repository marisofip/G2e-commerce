import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { TotalCompra } from "../component/totalcompra";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-5 mb-5">
			<div className="row">
				<div className="col-8">
				{store.carShopping !== null &&
					store.carShopping.length > 0 &&
					store.carShopping.map((carro, index) => {
						return (
						<div className="card mx-auto my-3" key={index} style={{ width: '40rem' }}>
							<div className="row g-0">
								<div className="col-md-4">
									<img src={carro.img} className="img-fluid rounded-start my-2" alt="..."/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">{carro.nombre}</h5>
										<p className="card-text text-end">Cantidad : {carro.cantidad}</p>
										<p className="card-text text-end">Precio : ${carro.precio}</p>
									</div>
								</div>
							</div>
						</div>
					);
					})}

				</div>
				<div className="col border-start border-info border-2">
					<TotalCompra/>
				</div>
			</div>
			<div className="d-grid gap-3 d-md-flex justify-content-md-end">
				<button className="btn btn-success mt-2" type="button">
				Siguiente
				</button>
				<button className="btn btn-secondary mt-2" type="button">
				Cancelar
				</button>
          	</div>
		</div>
		
	);
};
