import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Counter = () => {

    const[count, setCount] = useState(0);
    const [api, setapi] = useState([]);

    const addCount = () =>{
        setCount(count + 1)
    }
    

    const fetchapi = () => {
        axios.get('https://dummyjson.com/products').then(res => setapi(res))
    }

    useEffect(() =>{
        fetchapi();
    },[])

    

    

    console.log(api)

    

   

  return (
    <div className='text-black font-bold'>
        <button onClick={addCount}>+</button>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count -1 )}>-</button>
        <br/>
        <button onClick={() => setCount(0)}>Refresh</button>


    </div>
  )
}

export default Counter
