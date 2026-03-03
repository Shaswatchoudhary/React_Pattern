"use client"

export default function Button(){
  return (
    <button onClick={(e) => console.log("hey there ", e)}>Click me</button>
  )
}
//using use client even if in server component it will run in client side 
console.log() // print karne ke liye hota hai 
{/* <button/> jespe ap click karte vo , any button  */}

