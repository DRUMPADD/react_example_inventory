import axios from "axios"
export const getProducts = async() => 
    await axios.get("http://localhost:5000/products")

export const getStock = async(id) => 
    await axios.get(`http://localhost:5000/stock/${id}`)

export const createProduct = async(product) => 
    await axios.post("http://localhost:5000/products", product)

export const updateProduct = async(id, product) => 
    await axios.put(`http://localhost:5000/products/${id}`, product)

export const deleteStockProduct = async(id, product) => 
    await axios.put(`http://localhost:5000/stock_delete/${id}`, product)

export const addStockProduct = async(id, product) => 
    await axios.put(`http://localhost:5000/stock_add/${id}`, product)

export const deleteProduct = async(id) => 
    await axios.delete(`http://localhost:5000/products/${id}`)