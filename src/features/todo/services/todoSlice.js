import { createSlice } from '@reduxjs/toolkit';
import {
  addNoteMethod,
  addTodoMethod,
  deleteNoteMethod,
  deleteTodoMethod,
  editNoteMethod,
  editTodoMethod,
  getAllNoteMethod,
  getAllTodoMethod,
  getOneTodoMethod,
} from './todoThunk';

const initialState = {
  todoList: [
    {
      id: '1',
      userId: '2',
      name: 'Todo 1',
      isDone: false,
    },
    {
      id: '2',
      userId: '2',
      name: 'Todo 2',
      isDone: false,
    },
    {
      id: '3',
      userId: '2',
      name: 'Todo 4',
      isDone: true,
    },
  ],
  currentTodo: {
    name: '',
    isDone: 0,
    userId: 0,
    id: 0,
  },
  currentNoteList: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodoMethod.fulfilled, (state, action) => {
        state.todoList = [...state.todoList, action.payload]; //destructuring
      })
      .addCase(editTodoMethod.fulfilled, (state, action) => {
        const index = state.todoList.findIndex(
          (todo) => todo.id === action.payload.id
        );
        state.todoList[index] = action.payload;
      })
      .addCase(deleteTodoMethod.fulfilled, (state, action) => {
        state.todoList = state.todoList.filter(
          (todo) => todo.id !== action.payload
        );
      })

      .addCase(getAllTodoMethod.fulfilled, (state, action) => {
        state.todoList = action.payload.data;
      })

      .addCase(getAllTodoMethod.rejected, (state, action) => {
        console.log('Get all error: ', action.payload.data.error.message);
      })

      .addCase(getOneTodoMethod.fulfilled, (state, action) => {
        state.currentTodo = action.payload.data;
      })

      .addCase(getAllNoteMethod.fulfilled, (state, action) => {
        state.currentNoteList = action.payload.data;
      })

      .addCase(deleteNoteMethod.fulfilled, (state, action) => {
        state.currentNoteList = state.currentNoteList.filter(
          (note) => note.id !== action.payload
        );
      })

      .addCase(editNoteMethod.fulfilled, (state, action) => {
        const index = state.currentNoteList.findIndex(
          (note) => note.id === action.payload.data.id
        );
        console.log('note ss', action.payload);
        if (index) {
          state.currentNoteList[index].content = action.payload.data.content;
        }
      })

      .addCase(addNoteMethod.fulfilled, (state, action) => {
        state.currentNoteList.push(action.payload.data);
      });
  },
});
export const todoReducer = todoSlice.reducer;
