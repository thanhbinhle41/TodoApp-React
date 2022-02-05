import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
import { getLocalStorage } from '../../../../services/localStorage';
import CreateEditTodoForm from '../../components/CreateEditTodoForm';
import { addTodoMethod } from '../../services/todoThunk'
import './createTodo.css'

const CreateTodoPage = () => {
  const [todoName, setTodoName] = useState('');
  const userId = getLocalStorage('userId');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (todoName.trim()) {
      const newTodo = {
        name: todoName,
        isDone: false,
        userId,
      };

      dispatch(addTodoMethod(newTodo));
      navigate(routeList.HOME);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='container-wrap'>
      <Card className='user-info'>
        <Card.Title className='card-title'>Create todo</Card.Title>

        <Card.Body>
          <CreateEditTodoForm todoName={todoName} setTodoName={setTodoName} />
        </Card.Body>

        <Card.Footer className='action-wrap filter'>
          <Button className='logout-btn all-border' onClick={handleSubmit}>Save</Button>
          <Button className='logout-btn done-border' onClick={handleBack}>Back</Button> 
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CreateTodoPage;
