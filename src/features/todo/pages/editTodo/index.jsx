import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../../../../services/localStorage';
import CreateEditTodoForm from '../../components/CreateEditTodoForm';
import { editTodoMethod } from '../../services/todoThunk';

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
    <div>
      <Card className='container-wrap'>
        <Card.Title>Edit todo</Card.Title>

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

export default EditTodoPage;
