import { createSlice } from '@reduxjs/toolkit';
import { setLocalStorage, removeLocalStorage, getLocalStorage } from '../../../services/localStorage';
import { loginMethod, registerMethod } from './loginThunk';

const initialState = {
  // token: '',
  // currentId: '',
  // userid: 0,
  currentId: getLocalStorage('currentId'),
  userId: getLocalStorage('userId'),
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logoutMethod: (state) => {
      state.currentId = '';
      state.userId = 0;
      removeLocalStorage('userId');
      removeLocalStorage('currentId');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginMethod.fulfilled, (state, action) => {
        console.log('Login successfully!', action.payload.id);
        state.currentId = action.payload.id; 
        state.userId = action.payload.userId;
        setLocalStorage('currentId', state.currentId);
        setLocalStorage('userId', state.userId);
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
      // .addCase(getUserInforMethod.fulfilled, (state, action) => {
      //   state.userInfo = {...action.payload};
      // });
  },
});

export const { logoutMethod } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
