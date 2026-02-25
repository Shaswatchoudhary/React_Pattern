import { useReducer } from 'react'

import './App.css'

// State reducer for toggle functionality
const toggleReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { isOn: !state.isOn }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(toggleReducer, { isOn: false })

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE' })
  }

  return (
    <>
      <h1>State Reducer Pattern - Toggle Example</h1>
      <div className="card">
        <div className={`toggle-container ${state.isOn ? 'on' : 'off'}`}>
          <div className="toggle-status">
            Status: <span className={`status ${state.isOn ? 'on' : 'off'}`}>
              {state.isOn ? 'ON' : 'OFF'}
            </span>
          </div>
          <div className="toggle-buttons">
            <button onClick={handleToggle}>
              Toggle
            </button>
          </div>
        </div>
        <p>
          Click toggle to dispatch action and update state through reducer
        </p>
      </div>
      <p className="read-the-docs">
        State reducer pattern: dispatch action to reducer, get new state
      </p>
    </>
  )
}

export default App
