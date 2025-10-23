import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthGuardProps {
    children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
    const token = localStorage.getItem('authToken'); // or sessionStorage.getItem('authToken');
    return token ? children : <Navigate to="/login" />;
};

export default AuthGuard;