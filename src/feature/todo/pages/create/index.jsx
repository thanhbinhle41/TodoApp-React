import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {router} from '../../../../navigation/routers'
import { getLocalStorage } from '../../../../services/localStorage';
import CreateEditTodoForm from '../../components/createEditForm';
import {addTodoMethod} from '../../services/todoThunk';

const CreateTodoPage = () => {
  const [todoName, setTodoName] = useState('');
  const userId = getLocalStorage('userId');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if(todoName.trim()) {
      const newTodo = {
        name: todoName,
        isDone: false,
        userId,
      }; 
      debugger;
      console.log(newTodo);
      dispatch(addTodoMethod(newTodo));
      navigate(router.HOME);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return <div>
      <Card  className='container'>
        <Card.Title>Create todo</Card.Title>
      
        <Card.Body>
          <CreateEditTodoForm todoName={todoName} setTodoName={setTodoName}/>
        </Card.Body>

        <Card.Footer className='action'>
          <Button onClick={handleSubmit} > ADD </Button>
          <Button onClick={handleBack} > Back to home </Button>
        </Card.Footer>
      </Card>
  </div>;
  
};

export default CreateTodoPage;
