import React from "react";
import { Link } from "react-router-dom";
import logoImageUrl from "../../img/logo.png";
import { Shop } from "../pages/shop";

export const Navbar = () => {
  return (
    // <nav className="navbar navbar-light bg-light">
    // 	<div className="container">
    // 		<Link to="/">
    // 			<img className="d-inline-block  me-2" src={rigoImageUrl} alt="Logo" width="100" height="50" />
    // 			<span className="navbar-brand ms-2 mb-0 h1">Inicio</span>
    // 		</Link>
    // 		<div className="ml-auto">
    // 			<Link to="/demo">
    // 				<button className="btn btn-primary">Check the Context in action</button>
    // 			</Link>
    // 		</div>
    // 	</div>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="nav-brand" to="/">
          <img
            className="d-inline-block "
            src={logoImageUrl}
            alt="Logo"
            width="150"
            height="150"
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0  h4 gap-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Tienda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="buscar"
              aria-label="search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div className="nav-item ms-2 ms-lg-0">
              <Link className="nav-link" to="/shopping-cart">
                <i className="fa-solid fa-cart-shopping fa-2x text-body"/>
              </Link>
        </div>
      </div>
    </nav>
  );
};
