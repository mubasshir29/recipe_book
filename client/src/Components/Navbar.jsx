import React from 'react'

function Navbar() {
  return (
    <div className='bg-green-700 p-4'>
        <ul className='flex justify-center gap-16 text-2xl font-bold text-white mx-auto'>
            <li><a>Home</a></li>
            <li>Veg</li>
            <li>Non-Veg</li>
            <li>Snacks</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar