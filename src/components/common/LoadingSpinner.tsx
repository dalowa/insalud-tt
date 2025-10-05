import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  message?: string
  className?: string
}

export const LoadingSpinner = ({ 
  size = 'md', 
  message = 'Loading...', 
  className = '' 
}: LoadingSpinnerProps) => {
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  const containerClasses = {
    sm: 'gap-2 text-sm',
    md: 'gap-3 text-base',
    lg: 'gap-4 text-lg', 
    xl: 'gap-4 text-xl'
  }

  return (
    <div className={`flex flex-col items-center justify-center ${containerClasses[size]} ${className}`}>
      {/* Spinner SVG */}
      <div className={`${sizeClasses[size]} animate-spin`}>
        <svg 
          className="w-full h-full text-blue-600" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
      
      {/* Loading Message */}
      {message && (
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {message}
        </span>
      )}
      
      {/* Animated dots */}
      <div className="flex gap-1">
        <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce"></div>
      </div>
    </div>
  )
}
