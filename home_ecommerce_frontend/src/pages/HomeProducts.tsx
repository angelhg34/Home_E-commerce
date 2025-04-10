import { useEffect, useState } from 'react';
import ProductosForm from '../components/ProductosForm';
import {postProduct, getProducts} from '../services/productService.js'
import CardProduct from '../components/CardProduct.tsx';
import Header from '../components/Header.tsx';

const HomeProducts = () =>{

    const [productos,setProductos]=useState([]);

    useEffect(()=>{
        const fecthdata= async () =>{
            try{
                const data= await getProducts();
                setProductos(data);
            }
            catch (error){
                alert(`Error al obtener productos:`, error)
            }
        };
        fecthdata();
    },[])

    const handleCrear = async (producto) =>{
        try {
            await postProduct(producto);
            alert('Porducto creado con exito')
        } catch (error) {
            alert('Error al crear producto')
            console.error(error)
            
        }
    }

    return (
        <>
        <Header/><br/>
          <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <div className="col-span-2 row-span-5">
              <ProductosForm onSubmit={handleCrear} />
            </div>
            <div className="col-span-3 row-span-5 col-start-3">
              <div className="grid grid-cols-2 gap-4">
                {productos.map((producto, index) => (
                  <CardProduct key={index} producto={producto} />
                ))}
              </div>
            </div>
          </div>
        </>
      );
      
}

export default HomeProducts