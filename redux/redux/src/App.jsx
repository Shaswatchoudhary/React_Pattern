import React from "react";
import Counter from "./component/counter";
import {useDispatch} from "react-redux";


function App() {
  const dispatch = useDispatch();
  return (
    <div className="">
      <button onClick={e => dispatch({ type: "INCREMENT" })}>Increment</button>
      <Counter />
      <button onClick={e =>dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default App;