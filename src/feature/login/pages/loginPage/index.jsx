import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { router } from '../../../../navigation/routers';
import { getLocalStorage } from '../../../../services/localStorage';
import LoginFormWrap from '../../components/index';
import { loginMethod } from '../../services/loginThunk';

const LoginPage = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [username, setUsername] = useState('test');
  const [password, setPassword] = useState('test1234');

  const handleLogIn = (e) => {
    const data = {
      username,
      password,
    };
    dispatch(loginMethod(data)); 
  };

  const handleUserOnChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
  };
  // const currentId = getLocalStorage('currentId')

  const currentId = useSelector(state => state.auth.currentId )
  useEffect(() => {
    if(currentId) {
      navigate('/')
    }
  }, [currentId, navigate])

  return (
    <div className='login-page'>
      <LoginFormWrap cardTitle='Đăng nhập' handleSubmit={handleLogIn}>
        <Form.Group className='mb-3' controlId='username'>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            required={true}
            type='name'
            placeholder='Enter username'
            value={username}
            onChange={handleUserOnChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required={true}
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordOnChange}
          />
        </Form.Group>

        <div className='forget-password'>
          <Link to={router.RECOVER_PASSWORD}> Quên mật khẩu </Link>
        </div>
        <div className='register'>
          <Link to={router.REGISTER}> Đăng ký </Link>
        </div>
      </LoginFormWrap>
    </div>
  );
};

export default LoginPage;
