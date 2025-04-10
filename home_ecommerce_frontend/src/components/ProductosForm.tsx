import { useState } from "react"

const ProductosForm = ({onSubmit}) =>{

    const [producto,setProducto] = useState({
        nombre: '',
        descripcion:'',
        stock: '',
        precio:'',
        imagen:'',
        estado:''
    })

    const handleChange = (e) =>{
        setProducto({...producto,[e.target.name]: e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit(producto);
        setProducto({
            nombre: '',
            descripcion:'',
            stock: '',
            precio:'',
            imagen:'',
            estado:''
        })
    };

    return(
        <>

                <div className="col-span-2 row-span-5">
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="nameproduct" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del producto</label>
                        <input type="text" id="nameproduct" value={producto.nombre} name="nombre" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Nombre del producto" required onChange={handleChange}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock de producto</label>
                        <input type="number" id="stock" value={producto.stock} name="stock" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Stock del producto" required onChange={handleChange}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio del producto</label>
                        <input type="number" id="price" value={producto.precio} name="precio" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Precio del producto" required onChange={handleChange}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="imagenproduct" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen</label>
                        <input type="text" id="imagenproduct" value={producto.imagen} name="imagen" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Imagen del producto" required onChange={handleChange}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="desproduct" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción del producto</label>
                        <input type="textarea" id="desproduct" value={producto.descripcion} name="descripcion" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Descripción del producto" required onChange={handleChange}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="estproduct" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado del producto</label>
                        <input type="textarea" id="estproduct" value={producto.estado} name="estado" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Estado del producto" required onChange={handleChange}/>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar Producto</button>
                    </form>

                </div>

        </>
    
    )
}

export default ProductosForm