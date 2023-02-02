import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { validate } from "schema-utils";
import Swal from "sweetalert2";




export const RegistroUsuario = () => {
  const { actions } = useContext("")
  const [error, setError] = useState({});

  const inicializador = {
    name: "",
    apellidoPaterno: "",
    email: "",
    fono: "",
    rut: "",
    direccion: "",
    comuna: "",
    region: "",
    ciudad: "",
    codigoPostal: "",
    email: "",
    password: "",
  };

  const [value, setValue] = useState(inicializador);

  const navigate = useNavigate();

  const handlerClick = async e => {
    e.preventDefault();

    if (validate()) {
      const isOk = await actions.setRegister({
        name: value.name,
        apellidoPaterno: value.apellidoPaterno,
        fono: value.fono,
        rut: value.rut,
        direccion: value.direccion,
        comuna: value.comuna,
        ciudad: value.ciudad,
        region: value.region,
        codigoPostal: value.codigoPostal,
        email: value.email,
        password: value.password,
      });
      if (!isOk) {
        Swal.fire({

          title: "Hubo un Error",
          texte: "Reintente",
          incon: "error",
          confirmButtonText: "Continuar"
        }).then(() => {
          navigate("/");
        })
      } else {
        Swal.fire({
          title: "Usuario Registrado",
          icon: "success",
          confirmButtonText: "Continuar"
        }).then(() => {
          navigate("/")
        });
      }
    }
  };

  const validate = (validarCampo = value) => {
    const temp = { ...error };

    if ("name" in validarCampo) temp.name = validarCampo.name && validarCampo.name.trim().length > 0 ? "" : "Nombre es Obligatorio";
    if ("apellidoPaterno" in validarCampo) temp.apellidoPaterno = validarCampo.apellidoPaterno && validarCampo.apellidoPaterno.trim().length > 0 ? "" : "Apellido es Obligatorio";
    if ("fono" in validarCampo) temp.fono = validarCampo.fono && validarCampo.fono.trim().length > 0 ? "" : "Fono es Obligatorio";
    if ("rut" in validarCampo) temp.rut = validarCampo.rut && validarCampo.rut.trim().length > 0 ? "" : "Rut es Obligatorio";
    if ("direccion" in validarCampo) temp.direccion = validarCampo.direccion && validarCampo.direccion.trim().length > 0 ? "" : "Direccion es Obligatoria";
    if ("comuna" in validarCampo) temp.comuna = validarCampo.comuna && validarCampo.comuna == false ? "" : "Comuna es Obligatoria";
    if ("ciudad" in validarCampo) temp.ciudad = validarCampo.ciudad && validarCampo.ciudad == false ? "" : "Ciudad es Obligatoria";
    if ("region" in validarCampo) temp.region = validarCampo.region && validarCampo.region == false ? "" : "Region es Obligatoria";
    if ("codigoPostal" in validarCampo) temp.codigoPostal = validarCampo.codigoPostal && validarCampo.codigoPostal.trim().length > 0 ? "" : "Codigo Postal es Obligatorio";
    if ("email" in validarCampo) temp.email = validarCampo.email && validarCampo.email.trim().length > 0 ? "" : "Email es Obligatorio";
    if ("password" in validarCampo) temp.password = validarCampo.password && validarCampo.password.trim().length > 0 ? "" : "La Contraseña es Obligatoria"

    setError({
      ...temp
    });

    if (validarCampo === value) {
      return Object.value(temp).every(x => x === "");
    }
  };



  return (
    <>
      <div className="container w-50 justify-content-center mt-5  mb-5">
        <h1 className="fw-normal bg-secondary text-white py-3 mb-5 rounded-3 text-center">
          Registro de Usuario
        </h1>
        <form className="row g-3">

          <div className="form-floating col-md-6">
            <input type="text" className="form-control" id="name" placeholder="Nombre" />
            <label htmlFor="name">Nombre</label>
          </div>
          <div className="form-floating col-md-6">
            <input type="text" className="form-control" id="apellidopaterno" placeholder="Apellido paterno" />
            <label htmlFor="apellidopaterno">Apellido</label>
          </div>
          <div className="form-floating col-md-6">
            <input
              type="text"
              className="form-control"
              id="rut"
              placeholder="RUT"
              value={e.target.rut}
            />
            <label htmlFor="rut">RUT</label>
          </div>
          <div className="form-floating col-md-12">
            <input type="text" className="form-control" id="direccion" placeholder="Direccion" />
            <label htmlFor="direccion">Calle número, Depto oficina</label>
          </div>
          <div className="form-floating col-md-4">
            <select className="form-select" id="comuna" aria-label="Seleccione comuna">
              <option value="0">Comuna</option>
              <option value="1">Santiago</option>
              <option value="2">Providencia</option>
              <option value="3">Las Condes</option>
            </select>
            <label htmlFor="comuna">Seleccione comuna</label>
          </div>
          <div className="form-floating col-md-4">
            <select className="form-select" id="ciudad" aria-label="Seleccione ciudad">
              <option value="0">Ciudad</option>
              <option value="1">Santiago</option>
            </select>
            <label htmlFor="ciudad">Seleccione ciudad</label>
          </div>
          <div className="form-floating col-md-4">
            <select className="form-select" id="region" aria-label="Seleccione región">
              <option value="0">Region</option>
              <option value="1">Región Metropolitana</option>
            </select>
            <label htmlFor="region">Seleccione región</label>
          </div>
          <div className="form-floating col-md-6">
            <input type="text" className="form-control" id="codigoPostal" placeholder="Código postal" />
            <label htmlFor="codigoPostal">Código postal</label>
          </div>
          <div className="form-floating col-md-6">
            <input type="text" className="form-control" id="fono" placeholder="Teléfono" />
            <label htmlFor="fono">Número de teléfono</label>
          </div>
          <div className="form-floating col-md-6">
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Correo "name@example.com"</label>
          </div>
          <div className="form-floating col-md-6">
            <input type="password" className="form-control" id="password" placeholder="Password" />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>
          <div className="d-grid gap-4 d-md-flex justify-content-md-end pt-2">
            <button className="btn btn-success mt-2" type="button">
              Siguiente
            </button>
            <button className="btn btn-secondary mt-2" type="button">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
