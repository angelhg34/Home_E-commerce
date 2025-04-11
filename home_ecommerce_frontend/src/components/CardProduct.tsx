import { useState } from 'react';
import ProductosForm from './ProductosForm'; // ajusta la ruta si es necesario

const CardProduct = ({ producto, onEditar }) => {
    const [mostrarModal, setMostrarModal] = useState(false);

    const handleEditar = (productoActualizado) => {
        onEditar(producto.codigo_producto, productoActualizado); // Llama al handler del padre
        setMostrarModal(false);
    };

    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={producto.imagen} alt="Imagen" width={500} height={500}/>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{producto.nombre}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{producto.descripcion}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Precio: {producto.precio}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Stock: {producto.stock}</p>

                    <button
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => setMostrarModal(true)}
                    >
                        Editar
                    </button>
                </div>
            </div>

            {/* Modal */}
            {mostrarModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-md w-96 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-black"
                            onClick={() => setMostrarModal(false)}
                        >
                            ✖
                        </button>
                        <h2 className="text-xl font-bold mb-4">Editar Producto</h2>
                        <ProductosForm
                            initialValues={producto}
                            onSubmit={handleEditar}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default CardProduct;
