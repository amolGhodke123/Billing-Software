// AlertBox.js
import React, { useEffect } from 'react';
//import './AlertBox.css'; // Import CSS for styling

function AlertBox({ type, message, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Dismiss after 3 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`alert-box ${type}`}>
            <span className="alert-message">{message}</span>
            <button className="close-button" onClick={onClose}>&times;</button>
        </div>
    );
}

export default AlertBox;
