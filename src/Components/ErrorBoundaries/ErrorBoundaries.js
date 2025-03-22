import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

// Log the error to the console
  componentDidCatch(error, info){
    
    console.error("Error occurred in component:", info.componentStack);
    this.setState({
      errorInfo: info,
    });
  }


  //Print the error statements in the html
  render() {
    if (this.state.hasError) {
        return (
          <div>
            <h1>Oops, there was an error:</h1>
            <p>{this.state.errorInfo ? this.state.errorInfo.componentStack : "No additional error info available"}</p>
          </div>
        );
      }

    return this.props.children;
  }
}

export default ErrorBoundary;