import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";

const navItems = [
  {path: '/', lavel:'Home'},
  {path: '/shop', lavel:'Shop'},
  {path: '/about', lavel:'About Us'},
  {path: '/contact', lavel:'Contact'},
]

const NavItems = () => {
  return (
    <ul className='flex flex-column md:flex-row items-center md:space-x-8 gap-8'>
        {
            navItems.map((item, index)=>(
              <li key={index}>
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
  return (
    <header>
      <nav className='max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4'>
        {/* logo */}
        <Link to="/" className='font-bold'>Logo</Link>

        {/*desktop menu items */}
        <div className='hidden md:flex'>
          <NavItems />
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