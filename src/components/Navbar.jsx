import React from 'react'
import Logo from '../assets/Logo.png'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from 'react-icons/fa6';
import Darkmode from './Darkmode';

function Navbar() {
  return (
    <div className='shadow-md bg-white dark:bg-blue-900 dark:text-shadow-amber-100 duration-200 relative z-40'>
     {/* Upper Navbar */}
     <div className='bg-blue-600 py-2'>
      <div className='container flex justify-between items-center'>
        <div>
          <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-3'>
            <img src={Logo} alt="Logo" className='w-40 '/>
            SoftSell
          </a>
        </div>
        {/* Search */}
        <div className='flex justify-between items-center gap-4'>
          <div className='relative group hidden sm:block'>
            <input type="text" placeholder="Search Software" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:ouline-none focus:border-1 focus:border-red-400 bg-cyan-300"/>
          <FaSearch className="text-white group-hover:text-blue-600 absolute top-0.5 translate-y-0.5 right-3" />
          </div>
        <button onClick={()=>alert("Ordering is not avalaible yet")}
          className="bg-gradient-to-r from-red-900 to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
          <span className="group-hover:block hidden transition-all duration-200">
            Order
          </span>
          <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
        </button>
        <div>
        <Darkmode/>
        </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Navbar
