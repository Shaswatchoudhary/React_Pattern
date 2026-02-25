

import { useState } from "react"


function Input(props) {
  const [value , setvalue] = useState()
  const handleChange = (e)=> {  
    setvalue(e.target.value)
  }
  return (
    <>
    <input value={value} onChange={handleChange}/>
    <br/>
    {props.renderTextBelow(value)}
    </>

)
}

export default Input 
