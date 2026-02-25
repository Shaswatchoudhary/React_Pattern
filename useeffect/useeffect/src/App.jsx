import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(
    ()=>{
      console.log("count",count); 
      if(count === 0){
        setCount(10)
      }
    },
  )
 


  return (
    <>
   <div className='flex justify-center items-center flex-col h-screen'>
    <h1 className='text-2xl text-center font-bold mb-4'>Count: {count}</h1>
    <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => setCount(count + 1)}>Increment</button>
    <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => setCount(count - 1)}>Decrement</button>
   </div>
    </>
  )
}

export default App
