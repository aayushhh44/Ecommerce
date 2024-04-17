import axios from 'axios';
import React, {useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Cart from '../pages/Cart';



const Hero = () => {


    const{addToCart, cartItems} = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const[showModal, setShowModal] = useState(false);

    const getApi = () => {
        axios.get('https://dummyjson.com/products').then(res => {
            setProducts(res.data.products);
        }).catch(err => {
            console.log(err)
        })
    }

    const toggle = () =>{
        setShowModal(!showModal)
    }

    useEffect(() => {
        getApi();
    }, [])


    console.log(products)
    console.log(cartItems);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 mt-6 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center'>
            {products.map((pro) => (
               <div key={pro.id} className='bg-white shadow-md rounded-lg px-10 py-10'> 
               <img src={pro.images[0]} alt={pro.title} className='rounded-md h-48' />
               <div className='mt-4'>
                 <h1 className='text-lg uppercase text-black font-bold'>{pro.title}</h1>
                 <p className='mt-2 text-gray-600 text-sm'>{pro.description.slice(0, 40)}...</p>
                 <p className='mt-2 text-gray-600'>${pro.price}</p>
               </div>
               <div className='mt-6 flex justify-between items-center'>
                 <button onClick={() => addToCart(pro)} className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>Add to cart</button>
               </div>
             </div>
            ))}
        </div>
    )
}

export default Hero;
