import React, { useContext } from "react";
import { Context } from "../store/appContext";

//import { FaTrashAlt } from 'react-icons/fa';

const CarShopping = () => { 
	const { store, actions } = useContext(Context);
	const x = store.mostrarCarShop;

	return (
	
		<div className="carShopping">
            <button>
                <i className="fa-solid fa-cart-shopping fa-xl text-body"  onClick={() => actions.setMostrarCarShop()}/>
                {store.carShopping.length}
              </button>
			 
				
		
			<ul className={store.mostrarCarShop ? "visible" : "oculto"}>
				{store.carShopping.map((el, index) => {
					console.log(index)
					return (
						<div className="listado">
						<li key={index}>
							{el} {" "}
							<li onClick={() => actions.eliminarCarShop(index)} className="far fa-trash-alt" />
						</li> </div>
					);
				})}
			</ul>
			</div>
		

	)
};

export default CarShopping;