import React from 'react';

import { Navigate, Outlet } from 'react-router-dom'; 
import { getLocalStorage } from '../services/localStorage';
import { router } from '../navigation/routers';

const PrivateRoute = () => {
  const currentId = getLocalStorage('currentId') 
  return currentId ? <Outlet /> : <Navigate to={router.LOGIN} />;
};

export default PrivateRoute;