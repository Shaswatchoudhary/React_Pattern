import { useContext } from "react"
import UseContext from './context/context'
import React from 'react'

const Profile = React.memo(function Profile(props) {
  console.log("Profile rendered", props.name)
  const counter = useContext(UseContext)
  return (
    <div>
     
      <div className="profile"> 
        <h1>counter value in profile : {counter}</h1>
      </div>
    </div>
  )
})

export default Profile