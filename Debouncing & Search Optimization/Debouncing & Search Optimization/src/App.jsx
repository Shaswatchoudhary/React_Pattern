import { useEffect, useState, useRef } from "react";

function Search (){
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const controllerRef = useRef(null);
  const [results, setResults] = useState([]);

  // useEffect(()=>{
  //   const timer = setTimeout(()=>{
  //     // setDebouncedQuery(query) // we are updating the debounced query state after 3 seconds (query is updated every time we type)
  //   },3000)
  //   // return (
  //   //   clearTimeout(timer)
  //   // )
  //   // return()=>clearTimeout(timer)
  // },[query])

  // we have used debounce + cancel prevoius request
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!query) {
        setResults([]);
        setDebouncedQuery("");
        return;
      }

      // Cancel previous request
      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      const controller = new AbortController();
      controllerRef.current = controller;

      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?q=${query}`,
            { signal: controller.signal }
          );

          const data = await response.json();
          setResults(data);

          // debouncedQuery should store query string, not data array
          setDebouncedQuery(query);

        } catch (err) {
          if (err.name === "AbortError") {
            console.log("Request aborted");
          } else {
            console.error("Real error:", err);
          }
        }
      };

      fetchData();

    }, 500);

    // Proper debounce cleanup
    return () => clearTimeout(timer);

  }, [query]);

//If we debounce and properly cancel previous requests using AbortController, and ensure only the latest request updates state, then race conditions are effectively prevented in typical search scenarios.
// we can also use axios instead of fetch

  useEffect(()=>{
    if(debouncedQuery){
      console.log("API call for: ", debouncedQuery);
    }
  },[debouncedQuery])// if we do this it will call the API only once 
  // if we add debouncedQuery in the dependency array it will call the API every time the debounced query changes
  // we added only [] so it will not call any api request


  return (

  <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 px-7">
    <div className="w-full max-w-md backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
      
      <h1 className="text-4xl font-bold mb-6 text-center text-white tracking-wide">
        Debouncing
      </h1>

      <input 
        type="text" 
        placeholder="Search..."
        className="w-full px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all shadow-lg text-lg text-center"
        value={query}
        onChange={(e)=> setQuery(e.target.value)} 
      />

      <div className="mt-10 text-center min-h-[40px]">
        {debouncedQuery && (
          <p className="text-red-400 text-lg">
            Search results for: 
            <span className="text-red-500 font-semibold ml-2">
              {debouncedQuery}
            </span>
          </p>
        )}
      </div>

      {/* Showing actual API results */}
      <ul className="mt-6 space-y-2 max-h-60 overflow-y-auto">
        {results.map((item) => (
          <li key={item.id} className="text-white text-sm border-b border-neutral-700 pb-1">
            {item.title}
          </li>
        ))}
      </ul>

    </div>
  </div>
      /* we have use setQuery to update the query state and setDebouncedQuery to update the debounced query state*/
   
  )
}



// let lastExecutionTime = 0; // instead of this we can use useRef

// function Search(){
  
//   const [textQuery, setTextQuery] = useState("");
//   const [throttledQuery, setThrottledQuery] = useState("");
  
//   const lastRan = useRef(0);

// //throttling
// //valueRef.current keeps increasing.
// // It does NOT reset on re-render.
// // That means it persists.

//   useEffect(()=>{
//     const now = Date.now();
//     if(now - lastRan.current >= 3000){
//       lastRan.current = now;
//       setThrottledQuery(textQuery);
//     }
//   },[textQuery])

// useEffect(()=>{
//   if(throttledQuery){
//     console.log("API call for: ",throttledQuery);
//   }
// },[throttledQuery])



//   return (
    
//     <div className="flex  justify-center items-center h-screen bg-neutral-600 px-7">
//       <div className="w-full max-w-md">
//         <h1 className="text-5xl font-bold mb-4 text-center text-white">Throttling</h1>
//         <input 
//           type="text" 
//           placeholder="Search...."
//           className="w-full px-5 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500  transition-all shadow-lg text-lg text-center"
//           value={textQuery}
//           onChange={(e)=> setTextQuery(e.target.value)} 
//         />
//         <div className="mt-12 text-center min-h-[40px]">
//           {throttledQuery && (

//             <p className="text-red-400 text-lg animate-bounce">

//               Search results for: <span className="text-red-500 font-medium">{throttledQuery}</span>
//             </p>
//           )}
//         </div>
//       </div>
//       {/* we have use setTextQuery to update the query state and setThrottledQuery to update the throttled query state*/}
//     </div>
//   )
// }

export default Search