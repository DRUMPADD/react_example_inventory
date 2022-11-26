import React from 'react'

function ProvidersCard({ provider }) {
  return (
    <div className='bg-neutral-700 rounded-md text-white p-2 my-4 w-4/5'>
      <p className='text-2xl font-bold my-2 text-center'>{provider.prov} - {provider.name_prov}</p>
      <p className='text-xl my-2 text-center'>Email: {provider.email}</p>
      <p className='text-xl my-2 text-center'>Phone: {provider.phone}</p>
    </div>
  )
}

export default ProvidersCard