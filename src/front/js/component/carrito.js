import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//import { FaTrashAlt } from 'react-icons/fa';

const CarShopping = () => { 
	const { store, actions } = useContext(Context);
	const x = store.mostrarCarShop;

	return (
	
		<div className="carShopping">
			{store.carShopping.map((el, index) => {
					return (
            <button id="carShopping" className="btn btn-outline-secondary mt-2 ms-2" onClick={() => actions.setMostrarCarShop()} key={index}>
                <i className="fa-solid fa-cart-shopping fa-2x text-body"/>
                {" "}{el.cantidad}
            </button>)})}
			<ul className={store.mostrarCarShop ? "visible"+" list-group" : "oculto" +" list-group"}>
				{store.carShopping.map((el, index) => {
					return (
						// <div className="listado" key={index}>
							<li key={index} className="list-group-item">
								{el.nombre+" $"+el.precio+" Cantidad: "+el.cantidad} 
								<li onClick={() => actions.eliminarCarShop(index)} className="far fa-trash-alt ms-1 p-1" />
							</li> 
						// </div>
					);
				})}
				<li className="list-group-item">
					<Link className="nav-link btn btn-outline-info" onClick={() => actions.setMostrarCarShop()} to="/shopping-cart">Ir al carro</Link>
				</li>
			</ul>
			</div>
		
					
	)
};

export default CarShopping;