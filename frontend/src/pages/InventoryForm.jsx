import {React, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { createProduct } from '../api/product.api';

function StuckForm() {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    product_n: "",
    quantity: ""
  })

  const validate = (value) => {
    const data = Object.values(value);
    const validating = data.filter(el => el !== ""  && el !== null);
    return validating.length === data.length;
  }

  const registerProduct = async(values) => {
    try {
      await createProduct(values);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(validate(product)){
      setProduct({product_n: "", quantity: ""})
      await registerProduct(product);
      alert("Data saved");
      navigate("/")
    } else {
      alert("The 2 fields must be filled")
    }
  }
  
  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name] : event.target.value
    })
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-white font-bold text-3xl m-3'>
        {params.id ? "Edit product" : "Create new product"}
      </h1>
        <form className='max-w-xl rounded-md bg-zinc-900 mx-auto p-4' onSubmit={handleSubmit}>
          <div className='my-3'>
            <input type="text" onChange={handleInputChange} value={product.product_n} name="product_n" className='rounded-md w-full p-2' placeholder='Product name' />
          </div>
          <div className='my-3'>
            <input type="number" onChange={handleInputChange} value={product.quantity} name="quantity" className='rounded-md w-full p-2' placeholder='Amount' />
          </div>
          <div className='my-3'>
            <button type='submit' className='p-2 rounded-md w-full bg-green-600 text-white font-bold text-2xl'>
              Save
            </button>
          </div>
        </form>
    </div>
  )
}

export default StuckForm