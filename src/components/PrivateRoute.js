import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Component to protect routes - only accessible when logged in
const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();

    // If user is not logged in, redirect to login page
    if (!currentUser) {
        return <Navigate to="/" replace />;
    }

    // If user is logged in, show the requested page
    return children;
};

export default PrivateRoute;
