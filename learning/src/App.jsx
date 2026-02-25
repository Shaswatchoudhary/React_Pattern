import { useCallback, useState , useEffect , useRef } from 'react'

import './App.css'

function App() {
const [length , setLength] = useState(8)
const [numberAllowed , setNumberAllowed] = useState(false)
const [specialCharacterAllowed , setSpecialCharacterAllowed] = useState(false)
const [password , setPassword] = useState("")

const passwordRef= useRef(null)
const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password) //copy the password to the clipboard becz in react we can't directly access the DOM so we have to use window.navigator.clipboard.writeText() and .select() is used to select the password in the input field
}, [password])

const passwordGenerator = useCallback(()=>{
  let pass=""
  
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


  if(numberAllowed){
    str += "0123456789"
  }

  if(specialCharacterAllowed){
    str += "!@#$%^&*()_+"
  }

  let password = ""

  for(let i = 0 ; i < length ; i++){
   let char = str.charAt(Math.floor(Math.random() * str.length))
   password += char
  }

  setPassword(password)
}, [length , numberAllowed , specialCharacterAllowed , setPassword])
useEffect(()=>{passwordGenerator()} , [length , numberAllowed , specialCharacterAllowed , passwordGenerator])
  
  return (
    <>
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
  <h1 className='text-4xl font-bold underline'>Password Generator</h1>
  <div>
    <input type="text" value={password} placeholder="Password" readOnly
    ref={passwordRef}
    />

  <button className='outline-none' onClick={copyPasswordToClipboard}>Copy</button>
  <div className='flex items-center gap-x-1'>
    <div className='flex items-center gap-x-1'>
      <input type="range" 
      min={6}
      max={100}
      value={length} //from useState
className='cursor-pointer'   
onChange={(e)=>setLength(e.target.value)}   />
    </div>
    <label>Length: {length}</label>
  </div>

<div className='flex items-center gap-x-1'>
  <input type="checkbox"
   defaultChecked={numberAllowed} 
   onChange={()=>setNumberAllowed((prev)=>!prev)} /> 
{   //prev is the previous value of numberAllowed
}  <label>Numbers</label>
</div>

<div className='flex items-center gap-x-1'>
  <input type="checkbox"
   defaultChecked={specialCharacterAllowed} 
   onChange={()=>setSpecialCharacterAllowed((prev)=>!prev)} />
  <label>Special Characters</label>
</div>
  </div>
</div>
   </>
  )
}

export default App
