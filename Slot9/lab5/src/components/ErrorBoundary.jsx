import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      const errorMessage = this.state.error?.message || 'An unexpected error occurred';
      const errorStack = this.state.errorInfo?.componentStack || '';
      
      return (
        <div className="error-container p-4">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">❌ Error Loading Data</h4>
            <p><strong>Error Message:</strong></p>
            <p className="mb-2" style={{wordBreak: 'break-word'}}>{errorMessage}</p>
            
            {errorStack && (
              <>
                <hr />
                <p><strong>Component Stack:</strong></p>
                <pre className="bg-light p-2 rounded mb-2" style={{fontSize: '12px', maxHeight: '200px', overflow: 'auto'}}>
                  {errorStack}
                </pre>
              </>
            )}
            
            <hr />
            <p className="mb-0 small">💡 Tips: Check your internet connection, verify the API is accessible, or try refreshing the page.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;