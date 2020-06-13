import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const NuevoPlatillo = () => {

    //Validación y leer los datos del formulario
    const formik = useFormik({
        initialValues:{
            nombre: '',
            precio: '',
            categoria: '',
            imagen: '',
            descripcion: '',
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .min(3,'Los platillos deben tener al menos 3 caracteres')
                .required('El nombre del platillo es obligatorio'),
            precio: Yup.number()
                .min(1,'Debes agregar un número')
                .required('El precio del platillo es obligatorio'),
            categoria: Yup.string()                
                .required('La categoría del platillo es obligatoria'),
            descripcion: Yup.string()
                .min(10,'La descripcion debe ser más larga')
                .required('El descripcion del platillo es obligatorio'),
        }),
        onSubmit: datos =>{
            console.log(datos);
        }
    })

    return ( 
        <>
        <h1 className="text-3xl font-light mb-4">Agregar Platillo</h1>
        
        <div className="flex justify-center mt-10">
            <div className=" w-full max-w-3xl">
                <form
                onSubmit={formik.handleSubmit}
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre" >Nombre</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-nonde focus:shadow-outline"
                            id="nombre"
                            type="text"
                            placeholder="Nombre Platillo"
                            value= {formik.values.nombre}
                            onChange = {formik.handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio" >Precio</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-nonde focus:shadow-outline"
                            id="precio"
                            type="number"
                            placeholder="$20"
                            min="0"
                            value= {formik.values.precio}
                            onChange = {formik.handleChange}
                            
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria" >Categoria</label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-nonde focus:shadow-outline"
                            id="categoria"
                            name="categoria"
                            value= {formik.values.categoria}
                            onChange = {formik.handleChange}
                        >
                            <option value="">-- Sellecione --</option>
                            <option value="desayuno">Desayuno</option>
                            <option value="comida">Comida</option>
                            <option value="cena">Cena</option>
                            <option value="bebida">Bebidas</option>
                            <option value="postre">Postre</option>
                            <option value="ensaladas">Ensaladas</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen" >Imagen</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-nonde focus:shadow-outline"
                            id="precio"
                            type="file"
                            value= {formik.values.imagen}
                            onChange = {formik.handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion" >Descripcion</label>
                        <textarea 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-nonde focus:shadow-outline h-40"                            
                            id="descripcion"
                            placeholder="Descripcion del platillo"
                            min="0"
                            value= {formik.values.descripcion}
                            onChange = {formik.handleChange}
                        ></textarea>
                    </div>

                    <input
                        type="submit"
                        className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                        value ="Agregar Platillo"
                    />
                </form>
            </div>
        </div>
        </>
     );
}
 
export default NuevoPlatillo;