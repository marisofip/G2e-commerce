import React  from "react";
import { useState, useEffect,useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

export const Create = () => {
  const { store } = useContext(Context);
  const [nombre, setNombre] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [precio, setPrecio] = useState("")
  const [categoria_id, setCategoria_id] = useState("1")
  const [img, setImg] = useState(null)
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleSubmit = (e) => {
      e.preventDefault()
      let formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('descripcion', descripcion);
      formData.append('precio', precio);
      formData.append('categoria_id', categoria_id);
      formData.append('img', img);
      console.log(formData)
      register(formData);
  }

  const register = async (formData) => {
    
          try {
          const response = await fetch(`${process.env.BACKEND_URL}/api/create-product`, {
              method: 'POST',
              body: formData,
          })

          const data = await response.json()
          if (data.id) {
            setCurrentProduct(data)
              sessionStorage.setItem('currentProduct', JSON.stringify(data));
              console.log(data);
          }


      } catch (error) {
          console.log(error)
      }
  }
  useEffect(() => {
    checkCurrentProduct();
  }, [])

  const checkCurrentProduct = () => {
      if(sessionStorage.getItem('currentProduct')){
        setCurrentProduct(JSON.parse(sessionStorage.getItem('currentProduct')));
      }
  }
  return (
    <>

<div className='container-fluid w-50 justify-content-center mt-5  mb-5'>
            <div className='row' style={{ height: '600px' }}>
                <div className='col-12'>
                    <h1 className='fw-normal bg-secondary text-white py-3 mb-5 rounded-3 text-center'>Crear Producto</h1>
                </div>
                <div className='col-6'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Escribe aqui" onChange={e => setNombre(e.target.value)} value={nombre} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="descripcion" className="form-label">Descripcion</label>
                            <textarea className="form-control" id="descripcion" rows="3" onChange={e => setDescripcion(e.target.value)} value={descripcion} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="precio" className="form-label">Precio</label>
                            <input type="text" className="form-control" id="precio" placeholder="Escribe aqui" onChange={e => setPrecio(e.target.value)} value={precio} />
                        </div>
                        <div className="form-group mb-3"  >
                            <label htmlFor="categoria" className="form-label" >Categoria</label>
                            <select className="form-select" id="categoria"  onChange={e => setCategoria_id(e.target.value)}>
                        {store.categorias !== null &&
                                     store.categorias.length > 0 &&
                                     store.categorias.map((categoria, index) => {
                                        return (
                                          <option key={categoria.id} value={categoria.id}>  {categoria.nombre}</option>
                                          )})}
                                          </select>
                            </div>
                        
                        <div className="form-group mb-3">
                            <label htmlFor="img" className="form-label">Imagen:</label>
                            <input type="file" className="form-control" id="img" onChange={e => setImg(e.target.files[0])} />
                        </div>
                        <div className='col-12'>
                            <button className="btn btn-success m-2">Guardar</button>
                            <button type="button" className="btn btn-danger">Cancelar</button>
                        </div>
                    </form>
                </div>
                <div className='col-6'>
                    <div className='border py-5 mb-4'>
                    {
                      !!currentProduct &&
                        (
                          <div className="mx-auto" style={{ width: '480px' }}>
                                <img src={currentProduct?.img} alt="" width={450} height={350} className="rounded-cicle" />
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
        </div >
    </>
  );
};
