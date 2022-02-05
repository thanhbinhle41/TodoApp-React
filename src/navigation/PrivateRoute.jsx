import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { routeList } from './routes';

const PrivateRoute = () => { 
  const currentId = useSelector(state => state.auth.currentId); 
  return currentId ? <Outlet /> : <Navigate to={ routeList.LOGIN } />;
};

export default PrivateRoute;
