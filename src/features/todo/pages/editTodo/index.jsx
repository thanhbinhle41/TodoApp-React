import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../../../../services/localStorage';
import CreateEditTodoForm from '../../components/CreateEditTodoForm';
import { editTodoMethod } from '../../services/todoThunk';
import './editTodo.css'

const EditTodoPage = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState(state.name);
  const userId = getLocalStorage('userId');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const editedTodo = {
      name: todoName,
      isDone: state.isDone,
      userId,
      id: state.id,
    };
    dispatch(editTodoMethod(editedTodo));
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='container-wrap'>
      <Card className='user-info'>
        <Card.Title className='card-title'>Edit todo</Card.Title>

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

export default EditTodoPage;
