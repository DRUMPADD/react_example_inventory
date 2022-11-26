import axios from "axios"
export const getProducts = async() => 
    await axios.get("http://localhost:5000/products")

export const createProduct = async(product) => 
    await axios.post("http://localhost:5000/products", product)