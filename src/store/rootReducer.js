import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux'; 
import { combineReducers } from 'redux';
import { loginReducer } from '../feature/login/services/loginSlice';
import { todoReducer } from '../feature/todo/services/todoSlice';
 
const reducer = combineReducers({
  auth: loginReducer,
  todo: todoReducer
});

export const store = configureStore({
  reducer,
});

export const useAppSelector = useSelector;
