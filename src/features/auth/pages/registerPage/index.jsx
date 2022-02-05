import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
import AuthFormWrap from '../../components/AuthFormWrap';
import { registerMethod } from '../../services/authThunk';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegister = () => {
    // navigate(routeList.HOME);
    const data = {
      name,
      email,
      username,
      password,
      confirmPassword,
    };

    dispatch(registerMethod(data));
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className='register-page'>
      <AuthFormWrap cardTitle='Đăng ký' handleSubmit={handleRegister}>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Enter full name'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            required={true}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            placeholder='Enter username'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Enter Password'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='confirm-password'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required={true}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            placeholder='Confirm Password'
          />
        </Form.Group>

        <div className='forget-password'>
          <Link to={routeList.RECOVER_PASSWORD}> Quên mật khẩu </Link>
        </div>
        <div className='register'>
          <Link to={routeList.LOGIN}> Đăng nhập </Link>
        </div>
      </AuthFormWrap>
    </div>
  );
};

export default RegisterPage;
