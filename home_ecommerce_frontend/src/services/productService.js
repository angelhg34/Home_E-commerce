import axios from 'axios'

const API_URL="http://localhost:3000/productos";

export const getProducts = async () =>{
    const response= await axios.get(API_URL);
    return response.data;
}

export const postProduct = async (producto) =>{
    const response= await axios.post(API_URL,producto);
    return response.data;
}