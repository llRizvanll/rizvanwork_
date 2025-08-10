'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { ERROR_CONFIG, ENV_CONFIG } from '../../config'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  retryAttempts?: number
  retryDelay?: number
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
  retryCount: number
}

/**
 * Error Boundary component that catches JavaScript errors in child components
 * and displays a fallback UI instead of crashing the entire app
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0
    }
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (ERROR_CONFIG.errorBoundary.logErrors) {
      console.error('Error caught by ErrorBoundary:', error, errorInfo)
    }

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo)

    // Update state with error information
    this.setState({
      error,
      errorInfo
    })
  }

  handleRetry = () => {
    const { retryAttempts = ERROR_CONFIG.errorBoundary.retryAttempts } = this.props
    const { retryCount } = this.state

    if (retryCount < retryAttempts) {
      this.setState(prevState => ({
        retryCount: prevState.retryCount + 1
      }))

      // Reset error state after a delay
      setTimeout(() => {
        this.setState({
          hasError: false,
          error: null,
          errorInfo: null
        })
      }, this.props.retryDelay || ERROR_CONFIG.api.retryDelay)
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0
    })
  }

  render() {
    const { hasError, error, retryCount } = this.state
    const { children, fallback, retryAttempts = ERROR_CONFIG.errorBoundary.retryAttempts } = this.props

    if (hasError) {
      // Custom fallback UI
      if (fallback) {
        return fallback
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
            {/* Error Icon */}
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>

            {/* Error Message */}
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              {error?.message || 'An unexpected error occurred. Please try again.'}
            </p>

            {/* Error Details (Development only) */}
            {ENV_CONFIG.isDevelopment && error && (
              <details className="text-left mb-6 p-4 bg-gray-100 rounded-lg">
                <summary className="cursor-pointer font-medium text-gray-700 mb-2">
                  Error Details
                </summary>
                <pre className="text-xs text-gray-600 whitespace-pre-wrap">
                  {error.stack}
                </pre>
              </details>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {retryCount < retryAttempts && (
                <button
                  onClick={this.handleRetry}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Try Again ({retryAttempts - retryCount} attempts left)
                </button>
              )}
              
              <button
                onClick={this.handleReset}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Reset
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Reload Page
              </button>
            </div>

            {/* Contact Information */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                If the problem persists, please contact support.
              </p>
            </div>
          </div>
        </div>
      )
    }

    return children
  }
}

// Higher-order component for wrapping components with error boundary
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  )

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
  
  return WrappedComponent
}

export default ErrorBoundary
