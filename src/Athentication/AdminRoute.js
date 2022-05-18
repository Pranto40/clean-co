import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AdminRoute = () => {
    let location = useLocation();
    const admin = true
  
    if (!admin) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return <Outlet />;
};

export default AdminRoute;