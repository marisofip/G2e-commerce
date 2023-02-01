import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//import { FaTrashAlt } from 'react-icons/fa';

const CarShopping = () => { 
	const { store, actions } = useContext(Context);
	const x = store.mostrarCarShop;
	const [vSumCant, setVSumCant] = useState(0);

    useEffect(() => {
        const sumar = () => {
          const sumar = store.carShopping.map((carro, index) => parseFloat(carro.cantidad))
            .reduce((previous, current) => {
              return previous + current;
            }, 0);
          setVSumCant(sumar);
        };
        sumar();
      });



	return (	
		<div className="carShopping">
            <button id="carShopping" className="btn btn-outline-secondary mt-2 ms-2" onClick={() => actions.setMostrarCarShop()} >
                <i className="fa-solid fa-cart-shopping fa-2x text-body"/>
                {" "}{vSumCant}
            </button>
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