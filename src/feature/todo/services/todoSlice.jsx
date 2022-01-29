import { createSlice } from '@reduxjs/toolkit';
import { addTodoMethod, deleteTodoMethod, editTodoMethod, getAllTodoMethod, getOneTodoMethod} from './todoThunk';

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
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodoMethod.fulfilled, (state, action) => {
        state.todoList = [action.payload, ...state.todoList];
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
        console.log('rejectes2', action.payload.data.error.message);
      })

      .addCase(getOneTodoMethod.fulfilled, (state, action) => {
        state.currentTodo = action.payload.data;
      })
  },
});
export const todoReducer = todoSlice.reducer;
