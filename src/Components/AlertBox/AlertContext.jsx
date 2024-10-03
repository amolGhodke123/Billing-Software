import React, { createContext, useContext, useState } from 'react';
import AlertBox from '../AlertBox/AlertBox';

const AlertContext = createContext();

export const useAlert = () => {
    return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });

    const showAlert = (type, message) => {
        setAlert({ show: true, type, message });
    };

    const closeAlert = () => {
        setAlert({ ...alert, show: false });
    };

    return (
        <AlertContext.Provider value={showAlert}>
            {children}
            {alert.show && <AlertBox type={alert.type} message={alert.message} onClose={closeAlert} />}
        </AlertContext.Provider>
    );
};
