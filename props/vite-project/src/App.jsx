import './App.css'
import Dashboard from './dashboard'
import UseContext from './context/context'

import { useReducer } from 'react'

function App() {
  
  const items = Array.from({length: 10000}, (_, i) => i) //create an array of 10000 items

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 }
      case 'DECREMENT':
        return { count: state.count - 1 }
      default:
        return state
    }
  }, { count: 0 })
  
  // const [user]= React.useState({ name: 'Shaswat' })
  // const [count, setCount] = useState(0)

  return (
    <>
    <UseContext.Provider value={state.count}>
    <h1>Props drilling example</h1>
    <p>Passing data down through multiple levels of components</p>
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    {items.map(item => {
      <Dashboard key={item} name={item}/>
    })}
    {/* <h2>Current Count: {state.count} in App</h2>
    <hr />
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    <h3>App to profile component: by passing user as props but all intermediate components also receive it</h3> */}
    
    <Dashboard name={state.count}/>
 </UseContext.Provider>
    </>
  )
}

export default App


// const [state , counter]= useReducer((state, action)=>{
//   switch(action.type){
//     case 'Increment':
//       return {count: state.count + 1}
//     case 'Decrement':
//       return {count: state.count - 1}
//     default:
//       return state
//   }
// })