import React from 'react'

function ProductsCard({product}) {
  return (
    <div key={product.id} className="bg-zinc-600 text-white rounded-md p-4">
      <h1 className='text-3xl font-bold text-center'>{product.name_p}</h1>
      <div className='flex items-center justify-center flex-col'>
        <p>Quantity: {product.stuck}</p>
        <p>Registered at{product.registered}</p>
      </div>
    </div>
  )
}

export default ProductsCard