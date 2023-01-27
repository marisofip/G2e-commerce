import React from 'react';

export const NewCategory = () => {
    return (
        <div className='container w-50 justify-content-center mt-5  mb-5'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='fw-normal bg-secondary text-white py-3 mb-5 rounded-3 text-center'>Crear Categoría</h1>
                </div>
                <div className='col-12'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Nombre de Categoria</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Escribe aqui" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Tipo de Categoria</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Escribe aqui" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripcion</label>
                        <textarea className="form-control" id="Descripcion" rows="3"></textarea>
                    </div>
                    <div className='paymentButtom2 col-12'>

                        <button type="button" className="btn btn-success m-2">Guardar</button>
                        <button type="button" className="btn btn-danger">Cancelar</button>
                    </div>

                </div>
            </div>
        </div >
    )
}