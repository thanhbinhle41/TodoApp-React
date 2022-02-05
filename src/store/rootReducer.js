import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { authReducer } from '../features/auth/services/authSlice';
import { todoReducer } from '../features/todo/services/todoSlice';

const reducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const useAppSelector = useSelector;
