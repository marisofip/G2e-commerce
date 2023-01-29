import React from 'react';
import { useState, useEffect } from 'react';

export const NewCategory = () => {
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [img, setImg] = useState(null)
    const [currentCategoria, setCurrentCategoria] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('img', img);

        register(formData);
    }

    const register = async (formData) => {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/create-categoria`, {
                method: 'POST',
                body: formData
            })

            const data = await response.json()

            if (data.categoria.id) {
                setCurrentCategoria(data)
                sessionStorage.setItem('currentCategoria', JSON.stringify(data));
                console.log(data);
            }


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        checkCurrentCategoria();
    }, [])

    const checkCurrentCategoria = () => {
        if(sessionStorage.getItem('currentCategoria')){
            setCurrentCategoria(JSON.parse(sessionStorage.getItem('currentCategoria')));
        }
    }



    return (
        <div className='container w-50 justify-content-center mt-5  mb-5'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='fw-normal bg-secondary text-white py-3 mb-5 rounded-3 text-center'>Crear Categoría</h1>
                </div>
                <div className='col-12'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre de Categoria</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Escribe aqui" onChange={e => setNombre(e.target.value)} value={nombre} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="descripcion" className="form-label">Descripcion</label>
                            <textarea className="form-control" id="descripcion" rows="3"></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="img" className="form-label">Imagen:</label>
                            <input type="file" className="form-control" id="img" onChange={e => setImg(e.target.files[0])} />
                        </div>
                        <div className='d-grid col-12'>
                            <button className="btn btn-primary btn-sm gap-2">
                                Register
                            </button>
                            <button type="button" className="btn btn-success m-2">Guardar</button>
                            <button type="button" className="btn btn-danger">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}