import React, { Suspense, useState } from "react";
import ErrorBoundary from "./Errorboundary";

// Simulate slow network (2 seconds delay)
// const HeavyComponent = React.lazy(() =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(import("./HeavyComponent"));
//     }, 2000);
//   })
// );

const HeavyComponent = React.lazy(()=>
  new Promise((resolve , reject) => {
    setTimeout(()=>{
      // resolve(import("./HeavyComponent"))
      reject(new Error("Failed to load component"))
    },2000)
  })
)

// const ErrorBoundary = () => {
//   return <p>Something went wrong</p>;
// }

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Lazy + Suspense + ErrorBoundary Demo</h1>

      <button onClick={() => setShow(true)}>
        Load Heavy Component
      </button>
<ErrorBoundary>
    <Suspense fallback={<p>Component is loading wait for it</p>}>
        {show && <HeavyComponent />}
      
    </Suspense>
    </ErrorBoundary>
    </div>
  );
}

export default App;