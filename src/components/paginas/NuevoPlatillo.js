import React from 'react'

const NuevoPlatillo = () => {
    return ( 
        <>
        <h1 className="text-3xl font-light mb-4">Agregar Platillo</h1>
        
        <div className="flex justify-center mt-10">
            <div className=" w-full max-w-3xl">
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre" >Nombre</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-nonde focus:shadow-outline"
                            id="nombre"
                            type="text"
                            placeholder="Nombre Platillo"
                            
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
                            
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria" >Categoria</label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-nonde focus:shadow-outline"
                            id="categoria"
                            name="categoria"
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
                            
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion" >Descripcion</label>
                        <textarea 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-nonde focus:shadow-outline h-40"                            
                            id="descripcion"
                            placeholder="Descripcion del platillo"
                            min="0"
                            
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