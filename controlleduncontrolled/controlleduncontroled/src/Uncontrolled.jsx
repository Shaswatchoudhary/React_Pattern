import { useState  , useRef} from "react";
function Uncontrolled() {
  const [inputValue , setValue] = useState()
  const handleUnControl= ()=>{
    console.log(inputRef.current.value); //it give us 
    console.log(inputRef) // give us object 
  }
// console.log(inputValue); 
// will give us undefined because defaultValue does NOT create state,
// only DOM sets the initial value so for that reason we have using useRef for reference it

{/* Controlled components are preferred.

Uncontrolled is used when performance matters.

Libraries like React Hook Form use uncontrolled internally for performance optimization
*/}
    const inputRef=useRef()

  
    return (
        <div>
            <h1>Uncontrolled Component</h1>
            <input type="text" 
            placeholder="Enter text" 
            defaultValue="Shaswat"
            value={inputValue}
            ref={inputRef}
            onChange={(e)=>setValue(e.target.value)}

            />
            <button onClick={handleUnControl}>Submit</button>
        </div>
    )
}

export default Uncontrolled