import React from 'react'
import Sidebar from './sidebar'
import Profile from './profile'

const Dashboard = React.memo(function Dashboard(props) {
  console.log("Dashboard rendered" ,  props.name) //using props.name it tells 
  return (
    <div>
      <Sidebar />
      <Profile name={props.name} />
    </div>
  )
})

export default Dashboard