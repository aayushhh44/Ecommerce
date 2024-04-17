import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import ProductCategory from './pages/ProductsCategory'
import Counter from './pages/counter'


const App = () => {
  return (
    <div>
      <Routes>
   <Route path='/' element={<><Navbar/> <Hero/></>} />
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/categories' element={<ProductCategory />} />
   <Route path='/counter' element={<Counter />}/>
      </Routes>
    </div>
  )
}

export default App;
