import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import CartComp from './CartComp'
import { useSelector } from 'react-redux'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const {cart} = useSelector(store => store.cart)

  const onClose = ()=>{
    setIsOpen(false)
  }

  const toggleNav = ()=>{
    setIsNavOpen(!isNavOpen)
  }

  isOpen ? document.body.style.overflow = "hidden": document.body.style.overflow = "auto"

  return (
    <div>
      <div className='mx-auto flex justify-between items-center px-6 py-2 fixed top-0 z-20 bg-green-100 w-full border border-gray-100 shadow-xl lg:px-[180px]'>
           
           {/* heading instead of logo */}
           <Link to={'/'}>
             <h1 className="text-xl font-bold md:text-3xl md:font-extrabold text-green-700 tracking-wide">
               GROCIFY
             </h1>
           </Link>

           {/* menu section */}
           <nav className='flex gap-5'>
            <ul className='text-lg font-semibold md:flex items-center gap-7 hidden'>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/shop'}><li>Shop</li></Link>
                <Link to={'/about'}><li>About</li></Link>
                <Link to={'/contact'}><li>Contact</li></Link>
            </ul>
            <Link className='relative' onClick={()=>setIsOpen(true)}>
              <ShoppingCart className='w-6 h-6'/>
              <span className='absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                {cart.length}
              </span>
            </Link>
           {
            isNavOpen 
              ? <HiMenuAlt3 className='h-7 w-7 md:hidden' onClick={toggleNav}/> 
              : <HiMenuAlt1 className='h-7 w-7 md:hidden' onClick={toggleNav}/>
           }
           </nav>
      </div>

      {/* Responsive Menu */}
      {isNavOpen && <ResponsiveMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>}

      {/* Overlay */}
      {isOpen && (
        <div 
          className='fixed top-0 left-0 w-full h-full bg-black/70 z-40' 
          onClick={()=>setIsOpen(false)}
        ></div>
      )}

      {/* Cart */}
      <CartComp isOpen={isOpen} onClose={onClose}/>
    </div>
  )
}

export default Navbar
