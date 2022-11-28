import React from 'react'
import { Link } from 'react-router-dom'

function ProvidersCard({ provider }) {
  return (
    <Link to={`/providers/${provider.prov}`}>
      <div className='bg-neutral-700 rounded-md text-white p-2 my-4 w-4/5'>
        <p className='text-2xl font-bold my-2 text-center'>{provider.prov} - {provider.name_prov}</p>
        <p className='text-xl my-2 text-center'>Email: {provider.email}</p>
        <p className='text-xl my-2 text-center'>Phone: {provider.phone}</p>
      </div>
    </Link>
  )
}

export default ProvidersCard