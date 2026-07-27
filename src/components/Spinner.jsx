import React from 'react'
import { Loader2 } from 'lucide-react'

function Spinner({ message = "Loading GitHub repositories..." }) {
    return (
        <div className="spinner-container" id="loading-spinner">
            <Loader2 className="spinner-icon" size={36} />
            <p className="spinner-message">{message}</p>
        </div>
    )
}

export default Spinner
