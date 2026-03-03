// export default function Home(){
//   return (
//     <div>
//       <h1 className="text-3xl flex justify-center items-center font-bold underline">Home</h1>
//     </div>
//   )
// }

//hyrdration is the process of rehydrating the server-rendered HTML with client-side JavaScript. matlb easy words me 
//jab server se html render hoke client me aata hai uske baad client side js usko interactive banata hai usko hyrdration bolte hai  

export default function hero({heroName}){
  if(heroName === 'Joker')
    throw new Error('Joker is not a hero')
  return (
    <div>
{heroName} 
    </div>
  )
}