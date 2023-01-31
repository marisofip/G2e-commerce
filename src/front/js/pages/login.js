import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";


export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate("");

  // const validateForm = values => {
  //   const error = {};
  //   if (!values.email) {
  //     error.email = "El email es Obligatorio";
  //   }
  //   if (!values.password) {
  //     error.password = 'La contraseña es Obligatoria'
  //   }
  //   return error;
  // };

  const handlerClick = async e => {
    e.preventDefault();
    const response = await actions.setLogin({ email: email, password: password });
    console.log(response);
    if (!response.ok) {
      Swal.fire({
        tittle: "Email o Contraseña incorrecta",
        text: 'Vuelva a intentarlo',
        icon: "error",
        confirmButtonText: "Continuar"
      }).then(() => {
        Navigate("/")
      });
    } else {
      Swal.fire({
        title: "Haz Iniciado Sesion Correctamente",
        icon: 'success',
        confirmButtonText: 'Continuar',
      }).then(() => {
        Navigate(path ? path : "/")
      });
    }

  };

  return (
    <>
      <div className="container  justify-content-center mt-5  mb-5">
        <h1
          className="fw-normal p-0 shadow-none p-3 mb-5 bg-light rounded-4 border border-dark"
          style={{ textAlign: "center", boxShadow: "0.2" }}
        >
          Inicia Sesion
        </h1>
        <form>
          <div className="form-floating mt-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label for="floatingInput">Correo</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <label for="floatingPassword">Contraseña</label>
          </div>

          <div className="d-grid gap-4 d-md-flex justify-content-md-start pt-5">
            <button className="btn btn-success mt-5 " type="submit" onClick={e => handlerClick(e)}>
              Ingresar
            </button>
            <button className="btn btn-secondary mt-5 " type="button">
              Cancelar
            </button>
          </div>
          <div className="text-center w-100">
            <p className="text-muted font-weight-bold">
              ¿No tienes cuenta?{" "}
              <Link to="/registro_usuario">
                <a href="#" className="text-info ml-2 mb-5">
                  Crear cuenta
                </a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
