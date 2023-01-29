import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Carousel } from "../component/carousel";
import { Card } from "../component/cards";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid text-center mt-5">
			<Carousel/>
			<h1 className="my-5">Categorías</h1>
			<div className="row justify-content-evenly mb-5">
					<Card/> 
					
			</div>
			{/* <div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div> */}
			{/* <p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p> */}
		</div>
	);
};
