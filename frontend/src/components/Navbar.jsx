import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav className='bg-zinc-900 text-white p-5 flex justify-between items-center'>
            <h1 className='font-bold text-2xl'><Link to="/">React Inventory</Link></h1>
            <ul className='flex gap-x-2'>
                <li className='font-bold text-xl'><Link to="/">Home</Link></li>
                <li className='font-bold text-xl'><Link to="/newStock">Create</Link></li>
                <li className='font-bold text-xl'><Link to="/providers">Provider</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar