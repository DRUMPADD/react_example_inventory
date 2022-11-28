import React, { useEffect, useState } from 'react'
import { getProducts, getStock, deleteStockProduct, addStockProduct } from '../../api/product.api'

function ManageItemsPage() {

  const [option, setOption] = useState({
    selected : true
  })
  const [products, setProducts] = useState([]);
  const [quantities, setQuantity] = useState({
    id: null,
    quantity: 0,
  });
  
  const [q_modified, setQuantityModified] = useState({
    new: 0,
  });

  useEffect(() => {
    loadProducts();
  }, [])

  const loadProducts = async() => {
    const res = await getProducts();
    setProducts(res.data)
  }

  const getProductStock = async(id) => {
    const response = await getStock(id);
    const data_ = response.data;

    setQuantity({
      id: id,
      quantity: data_.stuck
    })
  }

  const handleOptionSelect = (event) => {
    setOption({
      selected: JSON.parse(event.target.value)
    })
  }

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    getProductStock(event.target.value)
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(option.selected);
    console.log(quantities);
    if(option.selected) {
      if(quantities.quantity - q_modified.new >= 0) {
        await deleteStockProduct(quantities.id, {new_stuck: q_modified.new});
        alert("Product updated");
      } else {
        alert("The quantity typed can't be lower than showed");
      }
    } else {
      await addStockProduct(quantities.id, {new_stuck: q_modified.new});
      alert("Product updated");
    }
    event.target.reset();
    setQuantityModified({new: 0})
    loadProducts();
  }
  
  const handleInputMChange = (event) => {
    setQuantityModified({new: parseInt(event.target.value) ? parseInt(event.target.value) : 0})
  }

  return (
    <div>
      <h1 className='text-white text-center text-2xl my-3 font-bold'>Choose products and their quantity</h1>

      <form className='bg-neutral-700 w-2/4 m-auto rounded-md p-2' onSubmit={handleSubmit}>
        <div className='flex gap-2 items-center justify-around my-2'>
          <label className='text-xl text-white'>Select option</label>
          <select className='rounded-md w-1/3 p-2' onChange={handleOptionSelect}>
            <option value={true}>Delete</option>
            <option value={false}>Add</option>
          </select>
        </div>
        <div className='flex gap-3 items-center justify-center my-2'>
          <label className='text-white text-xl'>Select product</label>
          <select className='rounded-md w-1/3 p-1' name="quantity" onChange={handleSelectChange}>
            <option disabled>--Select--</option>
            {
              products.map(element => (
                  <option value={element.id} key={element.id}>{element.name_p}</option>
                )
              )
            }
          </select>
          <input type="number" name="quantity" className='bg-slate-300 rounded-md w-1/5 p-1' onChange={(e) => setQuantity({quantity: Number(e.target.value)})} value={Number(quantities.quantity)} disabled />
        </div>
        <div className='flex gap-2 items-center justify-center my-2'>
          <input type="number" name="quantity" className='rounded-md w-1/5 p-1' onChange={handleInputMChange} />
          <input type="number" className='rounded-md w-1/12 p-1 text-center' disabled 
          onChange={() => quantities.quantity - q_modified.new ? quantities.quantity - q_modified.new : 0} 
          value={quantities.quantity === 0 ? 0 : quantities.quantity - q_modified.new < 0 ? 0 : quantities.quantity - q_modified.new} />
        </div>
        <div className='flex items-center justify-center'>
          <button type='submit' className='rounded-md w-2/5 text-center bg-green-500 text-white px-4 py-2'>Delete</button>
        </div>
      </form>
    </div>
  )
}

export default ManageItemsPage