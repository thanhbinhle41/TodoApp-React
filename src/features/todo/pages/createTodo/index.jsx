import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
import { getLocalStorage } from '../../../../services/localStorage';
import CreateEditTodoForm from '../../components/CreateEditTodoForm';
import { addTodoMethod } from '../../services/todoThunk';

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
    <div>
      <Card className='container-wrap'>
        <Card.Title>Create todo</Card.Title>

        <Card.Body>
          <CreateEditTodoForm todoName={todoName} setTodoName={setTodoName} />
        </Card.Body>

        <Card.Footer className='action-wrap'>
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CreateTodoPage;
