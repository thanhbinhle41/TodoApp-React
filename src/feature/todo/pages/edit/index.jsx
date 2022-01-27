import React from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import CreateEditTodoForm from '../../components/createEditForm';

const EditTodoPage = () => {
  const { state } = useLocation();
  console.log("test", state);
  return <div>
      <Card  className='container-wrap'>
        <Card.Title>Edit todo</Card.Title>
      
        <Card.Body>
            <CreateEditTodoForm todo={state} />
        </Card.Body>
      </Card>
  </div>;
};

export default EditTodoPage;
