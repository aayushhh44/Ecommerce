import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  // const[selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Fetch categories from the API
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        setCategories(response.data);
        console.log(categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const getPrductCategory = (category) => {
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        setCategoryData(res.data.products);
      })
      .catch((err) => {
        console.log("Error fetching categories", err);
      });
  };

  const handleCategoryClick = (dom) => {
    getPrductCategory(dom);
  };


  

  return (
    <>
    <div className="flex justify-between mt-16">
      <Link className="text-black absolute top-2 underline left-6" to='/'>Back</Link>
    <div className="flex flex-col w-10 flex-wrap justify-center gap-4">
      {categories.map((category, index) => (
        <button
          key={index} // Add a unique key prop here
          onClick={() => handleCategoryClick(category)}
          className='px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300'
        >
          {console.log(categoryData)}
          <h1>{category}</h1>
        </button>
      ))}
      </div>

      <div className="grid w-[1250px] mr-6 grid-cols-1 sm:grid-cols-2 mt-6 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center">
  {!categoryData.length ? (
    <div className="flex justify-center items-center h-screen">
    <h1 className="font-bold text-black">Please select a category</h1>
    </div>
  ) : (
    categoryData.map((hero) => (
      <div key={hero.id} className='bg-white h-[500px] shadow-md rounded-lg px-10 py-10'> 
        <img src={hero.images[0]} alt={hero.title} className='rounded-md h-48' />
        <div className='mt-4'>
          <h1 className='text-lg uppercase text-black font-bold'>{hero.title}</h1>
          <p className='mt-2 text-gray-600 text-sm'>{hero.description.slice(0, 40)}...</p>
          <p className='mt-2 text-gray-600'>${hero.price}</p>
        </div>
        <div className='mt-6 flex justify-between items-center'>
          <button onClick={() => addToCart(hero)} className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>Add to cart</button>
        </div>
      </div>
    ))
  )}
</div>



      </div>
    
    </>
  );
};

export default CategoryList;
