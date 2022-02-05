import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthApiMethod } from '../api/index';

export const loginMethod = createAsyncThunk(
  `auth/loginMethod`,
  async (data) => {
    try {
      const response = await AuthApiMethod.login(data);
      return response.data;
    } catch (err) {}
  }
);

export const registerMethod = createAsyncThunk(
  `auth/registerMethod`,
  async (data) => {
    try {
      const response = await AuthApiMethod.register(data);
      return response.data;
    } catch (err) {}
  }
);

export const getUserInfoMethod = createAsyncThunk(
  `auth/getUserInfoMethod`,
  async (id) => {
    try {
      const response = await AuthApiMethod.getUserInfo(id);
      return response.data;
    } catch (err) {}
  }
);

export const editUserMethod = createAsyncThunk(
  `auth/editUserMethod`,
  async (data) => {
    try {
      const response = await AuthApiMethod.editUser(data);
      console.log('first req', response);
      return response.data;
    } catch (err) {}
  }
);

export const changePasswordMethod = createAsyncThunk(
  `auth/changePasswordMethod`,
  async (data) => {
    try {
      const response = await AuthApiMethod.changePassword(data);
      console.log('change password', response);
      return response.data;
    } catch (err) {}
  }
);
