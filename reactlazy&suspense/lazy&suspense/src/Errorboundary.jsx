import React from "react";

class ErrorBoundary extends React.Component { // ErrorBoundary is a class component that extends React.Component 
  constructor(props) {
    super(props);
    this.state = { hasError: false }; // this means that the component is not in error state
  }

  static getDerivedStateFromError() { // this is a static method that is called when an error is thrown in a child component
    return { hasError: true };
  }

  componentDidCatch(error, info) { // this is a lifecycle method that is called when an error is thrown in a child component
    console.error("Caught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "red" }}>
          Failed to load component Check console for more details
        </div>
      );
    }

    return this.props.children; // because if there is no error then it will render the children
  }
}

export default ErrorBoundary;