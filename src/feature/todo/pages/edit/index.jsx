import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {getLocalStorage} from '../../../../services/localStorage'
import CreateEditTodoForm from '../../components/createEditForm';
import {editTodoMethod} from '../../services/todoThunk';
import { Button } from 'bootstrap';

const EditTodoPage = () => {
  const { state } = useLocation();
  const [todoName, setTodoName] = useState(state.name);
  const dispatch = useDispatch();
  const userId = getLocalStorage('userId');
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    const editTodo = {
      name: todoName,
      isDone: state.isDone,
      userId,
      id: state.id,
    };
    dispatch(editTodoMethod(editTodo))
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Card  className='container-wrap'>
        <Card.Title>Edit todo</Card.Title>
      
        <Card.Body>
          <CreateEditTodoForm todoName={todoName} setTodoName={setTodoName}/>
        </Card.Body>

        <Card.Footer>
          <Button onClick={handleSubmit}>Save</Button>
          <Button onClick={handleBack}>Back to home</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default EditTodoPage;
