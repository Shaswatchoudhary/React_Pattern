import Input from "./Input.jsx"
function App() {
  const showValue = value => {
    return (
      <>
        <p> the value is{value}</p>
      </>
    )
  }

  const showMulitpleByTen = value =>{
    return (
      <>
        <p> the multiply value  is{value * 10} </p>
      </>
    )
  }

  return (

  <div className="app">
  <Input 
  renderTextBelow={
    showValue
  }
  />
<br/>

<Input 
  renderTextBelow={showMulitpleByTen}
/>
  
  </div>
  )
}

export default App
