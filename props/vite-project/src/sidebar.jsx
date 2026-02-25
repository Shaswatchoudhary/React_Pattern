
import React from 'react'

const Sidebar = React.memo(function Sidebar() {
  console.log("Sidebar rendered")
  return (
    <div>
      {/* <p>{user}</p> */}
    </div>
  )
})

export default Sidebar