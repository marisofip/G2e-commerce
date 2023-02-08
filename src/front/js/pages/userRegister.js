import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validate } from "schema-utils";
import Swal from "sweetalert2";
import { Context } from "../store/appContext";

export const Register = () => {
    const { actions } = useContext(Context);
    const [error, setError] = useState({});


    const inicializador = {
        name: "",
        apellido: "",
        email: "",
        fono: "",
        rut: "",
        direccion: "",
        comuna: "",
        region: "",
        ciudad: "",
        codigoPostal: "",
        email: "",
        password: ""
    };

    const [values, setvalues] = useState(inicializador);
    const navigate = useNavigate();

    const handlerClick = async (e) => {
        console.log("Entre al handle")
        e.preventDefault();
        console.log("que trae el validate")
        console.log(validate())
        if (validate()) {
            const isOk = await actions.setRegister({
                name: values.name,
                apellido: values.apellido,
                fono: values.fono,
                rut: values.rut,
                direccion: values.direccion,
                comuna: values.comuna,
                ciudad: values.ciudad,
                region: values.region,
                codigo: values.codigoPostal,
                email: values.email,
                password: values.password
            });
            if (!isOk) {
                Swal.fire({
                    title: "Hubo un Error",
                    texto: "Reintentar",
                    icon: "error",
                    confirmButtonText: "Continuar"
                }).then(() => {
                    navigate("/registro_usuario")
                })
            } else {
                Swal.fire({
                    title: "Registrado con Exito",
                    icon: "success",
                    confirmButtonText: "Continuar"
                }).then(() => {
                    navigate("/")
                });
            }
        }
    }

    const handleInputChange = (e, campoNumero) => {
        e.preventDefault();
        const { name, values } = e.target;
        const valor1 = values;
        const valorNumero = /^[0-9\b]+$/;

        if (campoNumero) {
            if (valor1 === "" || valorNumero.test(valor1)) {
                const validarCampo = { [name]: valor1 };
                setvalues({
                    ...values,
                    ...validarCampo
                });
                validate(validarCampo)
            }
        } else {
            const validarCampo = { [name]: valor1 };
            setvalues({
                ...values,
                ...validarCampo
            });
            validate(validarCampo)
        }
    };

    const validate = (validarCampo = values) => {
        const temp = { ...error };
        console.log("en validate")

        if ("name" in validarCampo) temp.name = validarCampo.name && validarCampo.name.trim().length > 0 ? "BIEN" : "Nombre es Obligatorio";
        if ("apellido" in validarCampo) temp.apellido = validarCampo.apellido && validarCampo.apellido.trim().length > 0 ? "" : "Apellido es Obligatorio";
        if ("fono" in validarCampo) temp.fono = validarCampo.fono && validarCampo.fono.trim().length > 0 ? "" : "Telefono es Obligatorio";
        if ("rut" in validarCampo) temp.rut = validarCampo.rut && validarCampo.rut.trim().length > 0 ? "" : "Rut es Obligatorio";
        if ("direccion" in validarCampo) temp.direccion = validarCampo.direccion && validarCampo.direccion.trim().length > 0 ? "" : "La direccion es Obligatorio";
        if ("codigoPostal" in validarCampo) temp.codigoPostal = validarCampo.codigoPostal && validarCampo.codigoPostal.trim().length > 0 ? "" : "El Codigo es Obligatorio";
        if ("email" in validarCampo) temp.email = validarCampo.email && validarCampo.email.trim().length > 0 ? "" : "Email es Obligatorio";
        if ("password" in validarCampo) temp.password = validarCampo.password && validarCampo.password.trim().length > 0 ? "" : "La Contraseña es Obligatoria";
        setError({
            ...temp
        });
        console.log(error)
        return true
    };
    // if (validarCampo === values) {
    //     return Object.values(temp)
    // }

    return (
        <div className="container w-50 justify-content-center mt-5  mb-5">
            <h1 className="fw-normal bg-secondary text-white py-3 mb-5 rounded-3 text-center">
                Regitro de Usuario
            </h1>
            <form className="row g-3">
                <div className="form-floating col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Nombre"
                        value={values.name}
                        onChange={e => handleInputChange(e, false)} />
                    <label htmlFor="name">Nombre</label>
                </div>
                <div className="form-floating col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        id="apellido"
                        placeholder="Apellido paterno"
                        value={values.apellido}
                        onChange={e => handleInputChange(e, false)} />
                        {error.apellidoPaterno ? (
                            <small id="error-apellido" className="form-text text-danger">
                              {error.apellidoPaterno}
                            </small>
                          ) : null} 
                    <label htmlFor="apellido">Apellido</label>
                </div>
                <div className="form-floating col-md-6">
                    <input
                        type="number"
                        className="form-control"
                        id="rut"
                        placeholder="rut"
                        value={values.rut}
                        onChange={e => handleInputChange(e, false)} />
                    <label htmlFor="rut">Rut</label>
                </div>
                <div className="form-floating col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        id="direccion"
                        placeholder="direccion"
                        value={values.direccion}
                        onChange={e => handleInputChange(e, false)} />
                    <label htmlFor="direccion">Dirección</label>
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
                        <option value="0">Región</option>
                        <option value="1">Región Metropolitana</option>
                    </select>
                    <label htmlFor="region">Seleccione región</label>
                </div>
                <div className="form-floating col-md-6">
                    <input
                        type="number"
                        className="form-control"
                        id="codigoPostal"
                        placeholder="Código postal"
                        value={values.codigoPostal}
                        onChange={e => handleInputChange(e, false)}
                    />
                    <label htmlFor="codigoPostal">Código postal</label>
                </div>
                <div className="form-floating col-md-6">
                    <input
                        type="number"
                        className="form-control"
                        id="fono"
                        placeholder="fono"
                        value={values.fono}
                        onChange={e => handleInputChange(e, false)}
                    />
                    <label htmlFor="telefono">Teléfono</label>
                </div>
                <div className="form-floating col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="email"
                        value={values.email}
                        onChange={e => handleInputChange(e, false)}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating col-md-6">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={e => handleInputChange(e, false)}
                    />
                    <label htmlFor="password">Contraseña</label>
                </div>
                <div className="d-grid gap-4 d-md-flex justify-content-md-end pt-2">
                    <Link to="/shop">
                        <button className="btn btn-success mt-2" type="submit" onClick={e => handlerClick(e)}>
                            Siguiente
                        </button>
                    </Link>
                    <Link to="/">
                        <button className="btn btn-secondary mt-2" type="submit">
                            Cancelar
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );


};