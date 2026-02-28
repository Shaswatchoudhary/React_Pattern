
import { useEffect, useState } from "react";
import { useRef } from "react";

// function Search (){
//   const [query, setQuery] = useState("");
//   const [debouncedQuery, setDebouncedQuery] = useState("");


//   useEffect(()=>{
//     const timer = setTimeout(()=>{
//       setDebouncedQuery(query) // we are updating the debounced query state after 3 seconds (query is updated every time we type)
//     },3000)
//     // return (
//     //   clearTimeout(timer)
//     // )
//     return()=>clearTimeout(timer)
//   },[query])

// useEffect(()=>{
//  if(debouncedQuery){
//   console.log("API call for: ",debouncedQuery);
//  }
  
// },[debouncedQuery])// if we do this it will call the API only once 
// // if we add debouncedQuery in the dependency array it will call the API every time the debounced query changes
// // we added only [] so it will not call any api request



//   return (

//     <div className="flex  justify-center items-center h-screen bg-neutral-600 px-7">
//       <div className="w-full max-w-md">
//         <h1 className="text-5xl font-bold mb-4 text-center text-white">Debouncing</h1>
//         <input 
//           type="text" 
//           placeholder="Search...."
//           className="w-full px-5 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500  transition-all shadow-lg text-lg text-center"
//           value={query}
//           onChange={(e)=> setQuery(e.target.value)} 
//         />
//         <div className="mt-12 text-center min-h-[40px]">
//           {debouncedQuery && (

//             <p className="text-red-400 text-lg animate-bounce">

//               Search results for: <span className="text-red-500 font-medium">{debouncedQuery}</span>
//             </p>
//           )}
//         </div>
//       </div>
//       {/* we have use setQuery to update the query state and setDebouncedQuery to update the debounced query state*/}
//     </div>
//   )
// }


// let lastExecutionTime = 0; // instead of this we can use useRef

function Search(){
  
  const [textQuery, setTextQuery] = useState("");
  const [throttledQuery, setThrottledQuery] = useState("");
  
  const lastExecutionTime = useRef(0);

//throttling
//valueRef.current keeps increasing.
// It does NOT reset on re-render.
// That means it persists.

  useEffect(()=>{
    const now = Date.now();
    if(now - lastExecutionTime.current >= 3000){
      lastExecutionTime.current = now;
      setThrottledQuery(textQuery);
    }
  },[textQuery])

useEffect(()=>{
  if(throttledQuery){
    console.log("API call for: ",throttledQuery);
  }
},[throttledQuery])



  return (
    
    <div className="flex  justify-center items-center h-screen bg-neutral-600 px-7">
      <div className="w-full max-w-md">
        <h1 className="text-5xl font-bold mb-4 text-center text-white">Throttling</h1>
        <input 
          type="text" 
          placeholder="Search...."
          className="w-full px-5 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500  transition-all shadow-lg text-lg text-center"
          value={textQuery}
          onChange={(e)=> setTextQuery(e.target.value)} 
        />
        <div className="mt-12 text-center min-h-[40px]">
          {throttledQuery && (

            <p className="text-red-400 text-lg animate-bounce">

              Search results for: <span className="text-red-500 font-medium">{throttledQuery}</span>
            </p>
          )}
        </div>
      </div>
      {/* we have use setTextQuery to update the query state and setThrottledQuery to update the throttled query state*/}
    </div>
  )
}
export default Search