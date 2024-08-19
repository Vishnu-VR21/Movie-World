import React from 'react'
import Logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border items-center p-3'>
      <img className='w-[50px]' src={Logo} alt="Page Logo" />

      <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-4'>
        Movie World
      </h1>

      <div className="ml-auto flex space-x-8 mr-10">
        <Link className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-2xl' to="/">Home</Link>

        <Link className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-2xl' to="/watchlist">Watch List</Link>
      </div>
    </div>
  )
}

export default Navbar
