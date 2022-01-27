import { createSlice } from '@reduxjs/toolkit';
import { setLocalStorage } from '../../../services/localStorage';
import { loginMethod, registerMethod } from './loginThunk';

const initialState = {
  token: '',
  currentId: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginMethod.fulfilled, (state, action) => {
        console.log('Login successfully!', action.payload.id);
        state.currentId = action.payload.id; 
        setLocalStorage('currentId', state.currentId);
      })
      .addCase(loginMethod.rejected, (state, action) => {
        console.log('reject');
      })

      .addCase(registerMethod.fulfilled, (state, action) => {
        console.log('success1');
      })
      .addCase(registerMethod.rejected, (state, action) => {
        console.log('reject1');
      });
  },
});

export const loginReducer = loginSlice.reducer;
