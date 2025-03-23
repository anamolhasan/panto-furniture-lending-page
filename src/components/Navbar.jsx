import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa";

const navItems = [
  {path: '/', lavel:'Home'},
  {path: '/shop', lavel:'Shop'},
  {path: '/about', lavel:'About Us'},
  {path: '/contact', lavel:'Contact'},
]

const NavItems = ({toggleMenu}) => {
  return (
    <ul className='flex flex-col md:flex-row items-center md:space-x-8 gap-8'>
        {
            navItems.map((item, index)=>(
              <li key={index} onClick={toggleMenu}>
                <NavLink to={item.path}
                  className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold"
                    : "hover:text-primary"
                }
                >{item.lavel}</NavLink>
              </li>
            ))
          }
    </ul>
  )
}

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen]=useState(false)

const toggleMenu = ()=>{
  setIsMenuOpen(prevState => !prevState)
}
  return (
    <header>
      <nav className='max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4'>
        {/* logo */}
        <Link to="/" className='font-bold'>Logo</Link>

       {/*hemburger menu for mobail  */}
       <div onClick={toggleMenu} className='md:hidden text-xl cursor-pointer hover:text-primary'>
        {
          isMenuOpen ? null :<FaBars />
        }
       </div>

        {/*desktop menu items */}
        <div className='hidden md:flex'>
          <NavItems />
        </div>
        {/*mobail menu items */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0': '-translate-x-full'} md:hidden`}>
          <div className='absolute top-5 right-4 text-xl cursor-pointer' onClick={toggleMenu}>
            <FaTimes />
          </div>
          <NavItems toggleMenu={toggleMenu}/>
        </div>
        {/* card icon */}
        <div className='hidden md:flex relative'>
           <FaShoppingBag className='text-xl'/>
           <sup className='absolute top-0 -right-3 bg-primary text-white w-5 h-5 flex items-center justify-center text-xs rounded-full'>0</sup>
        </div>
      </nav>
    </header>
  )
}

export default Navbar