const CardProduct = ({producto}) =>{
    return(
        <>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={producto.imagen} alt="Imagen" />
            </a>
            <div className="p-5">
             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{producto.nombre}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{producto.descripcion}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Precio: {producto.precio}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Stock: {producto.stock}</p>

            </div>
        </div>
    </>
    )
}

export default CardProduct;