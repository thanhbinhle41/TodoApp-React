import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './feature/login/pages/loginPage';
import RegisterPage from './feature/login/pages/registerPage';
import HomePage from './feature/todo/pages/homepage';
import EditPage from './feature/todo/pages/edit';
import PrivateRoute from './navigation/PrivateRoute';
import { router } from './navigation/routers.js';
import CreatePage from './feature/todo/pages/create';
import DetailPage from './feature/todo/pages/detail';
import UserProfilePage from './feature/todo/pages/userProfile';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path={router.HOME} element={<PrivateRoute />}>
            <Route path={router.HOME} element={<HomePage />}></Route>
            <Route path={router.EDIT_TODO} element={<EditPage />}></Route>
            <Route path={router.CREATE_TODO} element={<CreatePage />}></Route>
            <Route path={router.DETAIL_TODO} element={<DetailPage />}></Route>
            <Route path={router.MY_PROFILE} element={<UserProfilePage />}></Route>
          </Route>
          <Route path={router.LOGIN} element={<LoginPage />} />
          <Route path={router.REGISTER} element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
