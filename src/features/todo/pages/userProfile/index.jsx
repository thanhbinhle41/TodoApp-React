import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
import {
  editUserMethod,
  getUserInfoMethod,
} from '../../../auth/services/authThunk';
import InfoItem from '../../components/InfoItem';
import './UserProfile.css';

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const { userId, userInfo } = useSelector((state) => state.auth);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    dispatch(getUserInfoMethod(userId));
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [dispatch, userId, userInfo.name, userInfo.email]);

  const navigate = useNavigate();

  const handleBack = () => {
    isEditable ? setIsEditable(false) : navigate(-1);
  };

  const handleEditClick = () => {
    isEditable ? handleEditSave() : setIsEditable(true);
  };

  const handleEditSave = () => {
    dispatch(
      editUserMethod({
        name,
        email,
        username: userInfo.username,
        isAdmin: userInfo.isAdmin,
        emailVerified: userInfo.emailVerified,
        id: userInfo.id,
        realm: userInfo.realm,
        createdAt: userInfo.createdAt,
        updatedAt: userInfo.updatedAt,
      })
    );
  };

  const handleChangePassword = () => {
    navigate(routeList.CHANGE_PASSWORD);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className='profile-page container-wrap'>
      <Card className='user-info'>
        <Card.Title className='card-title'>
          <div className='title'>User Information</div>
        </Card.Title>

        <Card.Body>
          <div className='user-info-body'>
            <Form>
              <InfoItem
                editable={isEditable}
                infoLabel='Name'
                infoValue={name}
                setInfo={setName}
              />
              <InfoItem
                editable={isEditable}
                infoLabel='Email'
                infoValue={email}
                setInfo={setEmail}
              />
              <InfoItem
                editable={false}
                infoLabel='Username'
                infoValue={userInfo.username}
              />
              <InfoItem
                editable={false}
                infoLabel='Is admin'
                infoValue={userInfo.isAdmin ? 'True' : 'False'}
              />
            </Form>
          </div>
        </Card.Body>
        <Card.Footer className='action-wrap filter'>
          <Button
            className='logout-btn all-border'
            variant='primary'
            onClick={() => handleEditClick()}>
            {isEditable ? 'Save' : 'Edit Profile'}
          </Button>
          <Button
            className='logout-btn progress-border'
            variant='primary'
            onClick={() => handleChangePassword()}>
            Change Password
          </Button>
          <Button
            className='logout-btn done-border'
            variant='primary'
            onClick={() => handleBack()}>
            {isEditable ? 'Cancel' : 'Back'}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default UserProfilePage;
