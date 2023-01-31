import React, { useContext } from "react";
import { Context } from "../store/appContext";

//import { FaTrashAlt } from 'react-icons/fa';

const CarShopping = () => { 
	const { store, actions } = useContext(Context);
	const x = store.mostrarCarShop;

	return (
	
		<div className="carShopping">
            <button id="carShopping" className="btn btn-outline-secondary mt-3">
                <i className="fa-solid fa-cart-shopping fa-2x text-body"  onClick={() => actions.setMostrarCarShop()}/>
                {store.carShopping.length}
            </button>
			<ul className={store.mostrarCarShop ? " visible"+" list-group" : "oculto" +" list-group"}>
				{store.carShopping.map((el, index) => {
					return (
						<div className="listado" key={index}>
							<li key={index} className="list-group-item p-2">
								{el.nombre+" $"+el.precio+" Cantidad: "+el.cantidad} 
								<li onClick={() => actions.eliminarCarShop(index)} className="far fa-trash-alt ms-1 p-1" />
							</li> 
						</div>
					);
				})}
			</ul>
			</div>
		

	)
};

export default CarShopping;