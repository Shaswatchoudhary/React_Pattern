import React from 'react'

function Control () {
  const handleControl = () => {
    console.log(inputValue)
  }
  const [inputValue, setInputValue] = React.useState('')
  return (
    <>
    <div>
      <h1>Controlled Component</h1>
      <input type="text" placeholder="Enter text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={handleControl}>Submit</button>
    </div>
    </>
  )
}
export default Control