import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginApiMethod } from '../api/index';

export const loginMethod = createAsyncThunk(
  `login/loginMethod`,
  async (data) => {
    try {
      const response = await LoginApiMethod.login(data);
      console.log('test', response);
      return response.data;
    } catch (err) {}
  }
);

export const registerMethod = createAsyncThunk(
  `login/registerMethod`,
  async (data) => {
    try {
      const response = await LoginApiMethod.register(data);
      console.log('test', response);
      return response.data;
    } catch (err) {}
  }
);
