'use client'
import React from "react"
class Errorboundary extends React.Component { //error boundary ek class component hai isliye use client use kiya hai  vo function component me nahi ban sakta 
  constructor(props) { //constructor is used to initialize the state
    super(props) //super is used to call the parent class constructor konsa parent class to react.component to parent class page.jsx me error boundary ko wrap kiya hai vo 
    this.state = {
      hasError: false //ye state error ko track karta hai 
    }
  }
  static getDerivedStateFromError(error) { //ye method error ko catch karta hai 
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) { //ye method error ko log karta hai 
    console.log(error, errorInfo)
  }
  render() {
    if (this.state.hasError) { //ye method error ko render karta hai 
      return <h1>Something went wrong</h1>
    }
    return this.props.children //ye method children ko render karta hai 
  }
}

export default Errorboundary