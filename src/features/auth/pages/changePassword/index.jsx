import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
import { changePasswordMethod } from '../../services/authThunk';
import './ChangePassword.css';

const ChangePasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [oldPassword, setOldPassWord] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleOldPasswordOnChange = (e) => {
    setOldPassWord(e.target.value);
  };
  const handleNewPasswordOnChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handleChangePassword = (e) => {
    const data = {
      oldPassword,
      newPassword,
    };
    dispatch(changePasswordMethod(data));
    navigate(routeList.HOME);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='container-wrap'>
      <Card className='user-info'>
        <Card.Title className='card-title'>
          <div className='title'>Change Password</div>
        </Card.Title>

        <Card.Body>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Old password</Form.Label>
            <Form.Control
              required={true}
              type='password'
              placeholder='Enter old password'
              value={oldPassword}
              onChange={handleOldPasswordOnChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>New password</Form.Label>
            <Form.Control
              required={true}
              type='password'
              placeholder='Enter new password'
              value={newPassword}
              onChange={handleNewPasswordOnChange}
            />
          </Form.Group>
        </Card.Body>
        <Card.Footer className='action-wrap filter'>
          <Button
            className='logout-btn all-border'
            variant='primary'
            onClick={() => handleChangePassword()}>
            Save
          </Button>
          <Button
            className='logout-btn done-border'
            variant='primary'
            onClick={() => handleBack()}>
            Back
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ChangePasswordPage;
