import React from 'react'
import { AlertIcon, RefreshIcon } from './Icons'

function ErrorMessage({ message, onRetry }) {
    return (
        <div className="error-card" id="error-message">
            <div className="error-icon">
                <AlertIcon size={24} />
            </div>
            <div className="error-content">
                <h3>Failed to fetch repositories</h3>
                <p className="error-text">{message || 'An unexpected error occurred while contacting GitHub API.'}</p>
                {onRetry && (
                    <button className="retry-btn" onClick={onRetry} id="retry-button">
                        <RefreshIcon size={14} />
                        <span>Retry Fetching</span>
                    </button>
                )}
            </div>
        </div>
    )
}

export default ErrorMessage
