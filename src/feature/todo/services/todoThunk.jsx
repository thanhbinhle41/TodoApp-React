import { createAsyncThunk } from '@reduxjs/toolkit';
import { todoApiMethod } from '../api';

export const addTodoMethod = createAsyncThunk(
  'todo/addTodoMethod',
  async (data, thunkApi) => {
    try {
      const response = await todoApiMethod.addTodo(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

export const editTodoMethod = createAsyncThunk(
  'todo/editTodoMethod',
  async (data, thunkApi) => {
    try {
      const response = await todoApiMethod.editTodo(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

export const deleteTodoMethod = createAsyncThunk(
  'todo/deleteTodoMethod',
  async (id, thunkApi) => {
    try {
      const response = await todoApiMethod.deleteTodo(id); 
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

export const getAllTodoMethod = createAsyncThunk(
  'todo/getAllTodoMethod',
  async (_, thunkApi) => {
    try {
      const response = await todoApiMethod.getAllTodo();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

export const getOneTodoMethod = createAsyncThunk(
  'todo/getOneTodoMethod',
  async (id, thunkApi) => {
    try {
      const response = await todoApiMethod.getOneTodo(id);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);


