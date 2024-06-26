import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../pages/Cart'
import { CartContext } from '../context/CartContext'



const Navbar = () => {

  const[showModal, setShowModal] = useState(false);
  const{cartItems} = useContext(CartContext);

  const toogle = () =>{
    setShowModal(!showModal)
  }

  return (
    <div>
      <nav className='text-gray-700 font-openSans flex justify-end space-x-12 mt-3 mr-8'>
        <Link className='hover:text-gray-400 text-white' to='/home'>Home</Link>
        <Link className='hover:text-gray-400 text-white' to='/categories'>Categories</Link>
        {!showModal && <Link onClick={toogle} className='hover:text-gray-400 text-white font-bold' to='/cart'>Cart ({cartItems.length})</Link>}
        <Link className='hover:text-gray-400 text-white' to='/new-arrivals'>New Arrivals</Link>
        <Link className='hover:text-gray-400 text-white' to='/blogs'>Blog</Link>
      </nav>
    </div>
  )
}

export default Navbar;
