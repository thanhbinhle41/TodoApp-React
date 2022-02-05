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

export const getAllNoteMethod = createAsyncThunk(
  'todo/getAllNoteMethod',
  async (_, thunkApi) => {
    try {
      const response = await todoApiMethod.getAllNote();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

export const addNoteMethod = createAsyncThunk(
  'todo/addNoteMethod',
  async (note, thunkApi) => {
    try {
      const response = await todoApiMethod.addNote(note);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

export const editNoteMethod = createAsyncThunk(
  'todo/editNoteMethod',
  async (note, thunkApi) => {
    try {
      const response = await todoApiMethod.editNote(note);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

export const deleteNoteMethod = createAsyncThunk(
  'todo/deleteNoteMethod',
  async (id, thunkApi) => {
    try {
      await todoApiMethod.deleteNote(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);
