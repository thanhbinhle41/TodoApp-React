import React from 'react';
import { Card } from 'react-bootstrap';
import CreateEditTodoForm from '../../components/createEditForm';

const CreateTodoPage = () => {
  return <div>
      <Card  className='container-wrap'>
          <Card.Title>Create todo</Card.Title>
      
        <Card.Body>
            <CreateEditTodoForm />
        </Card.Body>
      </Card>
  </div>;
};

export default CreateTodoPage;
