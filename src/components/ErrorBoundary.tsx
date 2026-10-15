import React from "react";
import ErrorBoundaryScreen from "../app/screens/Error/ErrorBoundaryScreen";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, info: any) {
    console.log("Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryScreen message={String(this.state.error)} />;
    }
    return this.props.children;
  }
}
