import React, { useContext } from "react";

export const Create = () => {
  return (
    <>
      <div className="container  justify-content-center mt-5  mb-5">
        <h1
          h1 className='fw-normal bg-secondary text-white py-3 mb-5 rounded-3 text-center'
          style={{ textAlign: "center", boxShadow: "0.2" }}
        >
          Crear Productos
        </h1>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row mb-5 ">
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img rounded float-start"
                width="210"
                height="210"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 200x200"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                  imagen
                </text>
              </svg>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-8 col-md-6">
                  <svg
                    className="bd-placeholder-img rounded float-start"
                    width="140"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 200x200"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      imagen
                    </text>
                  </svg>
                </div>
                <div className="col-4 col-md-6">
                  <svg
                    className="bd-placeholder-img rounded float-start"
                    width="140"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 200x200"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      imagen
                    </text>
                  </svg>
                </div>

                <div className="col-8 col-md-6 mt-1">
                  <svg
                    className="bd-placeholder-img rounded float-start"
                    width="140"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 200x200"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      imagen
                    </text>
                  </svg>
                </div>
                <div className="col-4 col-md-6 mt-1">
                  <svg
                    className="bd-placeholder-img rounded float-start"
                    width="140"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 200x200"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      imagen
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form>
          <div className="form-floating mt-3">
            <input
              type="name"
              className="form-control"
              id="floatingInput"
              placeholder="..."
            />
            <label for="floatingInput">Producto</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="name"
              className="form-control"
              id="floatingInput"
              placeholder="..."
            />
            <label for="floatingInput">Categoria</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="name"
              className="form-control"
              id="floatingInput"
              placeholder="..."
            />
            <label for="floatingInput">Marca</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="name"
              className="form-control"
              id="floatingInput"
              placeholder="..."
            />
            <label for="floatingInput">Modelo</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Precio</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Stock</label>
          </div>
        </form>

        <div className="d-grid gap-4 d-md-flex justify-content-md-center pt-5">
          <button className="btn btn-success mt-5 " type="button">
            Guardar
          </button>
          <button className="btn btn-secondary mt-5 " type="button">
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};
