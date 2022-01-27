import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux'; 
import { combineReducers } from 'redux';
import { loginReducer } from '../feature/login/services/loginSlice';
 
const reducer = combineReducers({
  auth: loginReducer,
});

export const store = configureStore({
  reducer,
});

export const useAppSelector = useSelector;
