import React, { useContext } from "react";

export const EditUser = () => {
  return (
    <>
      <div className="container w-50 justify-content-center mt-5  mb-5">
      <h1 className="p-3 mb-5 bg-secondary rounded-4 text-white text-center">
            Crear - Editar Usuario
          </h1>
        <form className="row g-3">

          <div className="form-floating col-md-6">
            <input type="text" className="form-control" id="name" placeholder="Nombre"/>
            <label for="name">Nombre</label>
          </div>
          <div className="form-floating col-md-6">
            <input type="text" className="form-control" id="apellidopaterno" placeholder="Apellido paterno"/>
            <label for="apellidopaterno">Apellido</label>
          </div>
          <div className="form-floating col-md-6">
            <input type="text" className="form-control" id="rut" placeholder="RUT"/>
            <label for="rut">RUT</label>
          </div>
          <div className="form-floating col-md-12">
            <input type="text" className="form-control" id="direccion" placeholder="Direccion"/>
            <label for="direccion">Calle número, Depto oficina</label>
          </div>
          <div className="form-floating col-md-4">
            <select class="form-select" id="comuna" aria-label="Seleccione comuna">
              <option selected>Comuna</option>
              <option value="1">Comuna 1</option>
              <option value="2">Comuna 2</option>
              <option value="3">Comuna 3</option>
            </select>
            <label for="comuna">Seleccione comuna</label>
          </div>
          <div className="form-floating col-md-4">
            <select class="form-select" id="ciudad" aria-label="Seleccione ciudad">
              <option selected>Ciudad</option>
              <option value="1">Ciudad 1</option>
              <option value="2">Ciudad 2</option>
              <option value="3">Ciudad 3</option>
            </select>
            <label for="ciudad">Seleccione ciudad</label>
          </div>
          <div className="form-floating col-md-4">
            <select class="form-select" id="region" aria-label="Seleccione región">
              <option selected>Región</option>
              <option value="1">Región 1</option>
              <option value="2">Región 2</option>
              <option value="3">Región 3</option>
            </select>
            <label for="region">Seleccione región</label>
          </div>
          <div className="form-floating col-md-6">
            <input type="text" className="form-control" id="codigopostal" placeholder="Código postal"/>
            <label for="codigopostal">Código postal</label>
          </div>
          <div className="form-floating col-md-6">
            <input type="text" className="form-control" id="fono" placeholder="Teléfono"/>
            <label for="fono">Número de teléfono</label>
          </div>          
          <div className="form-floating col-md-6">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Correo "name@example.com"</label>
          </div>
          <div className="form-floating col-md-6">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Contraseña</label>
          </div>
          <div className="d-grid gap-4 d-md-flex justify-content-md-end pt-5">
            <button className="btn btn-success mt-2" type="button">
              Guardar
            </button>
            <button className="btn btn-secondary mt-2" type="button">
              Cancelar
            </button>
          </div>
        </form>z
      </div>
    </>
  );
};
