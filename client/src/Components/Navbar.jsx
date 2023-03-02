import React from 'react'

function Navbar() {
  return (
    <div className='bg-white w-screen py-1'>
        <section className='p-4 w-4/5 mx-auto flex justify-between items-center'>
        <h1 className='sm:text-4xl sm:font-bold text-slate-600'>PAKWAN-SHALA</h1>
        <ul className='flex flex-col text-center font-bold text-slate-600 sm:flex-row justify-center items-center gap-4 sm:gap-6 text-lg text-slate-900'>
            <li><a>Home</a></li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        </section>
    </div>
  )
}

export default Navbar