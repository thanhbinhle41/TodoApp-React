import { createSlice } from '@reduxjs/toolkit';
import { addTodoMethod, deleteTodoMethod, editTodoMethod, getAllTodoMethod, getOneTodoMethod} from './todoThunk';

const initialState = {
  todoList: [],
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
        // state.todoList = [action.payload, ...state.todoList];
      })
      .addCase(editTodoMethod.fulfilled, (state, action) => {
        // const index = state.todoList.findIndex(
        //   (todo) => todo.id === action.payload.id
        // );
        // state.todoList[index] = action.payload;
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
