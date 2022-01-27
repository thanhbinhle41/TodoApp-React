import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './style.css';

const LoginFormWrap = (props) => {
  const { cardTitle, handleSubmit, children } = props;

  return (
    <Card className='login_from_wrap'>
      <Card.Body>
        <Card.Title className='title'>{cardTitle}</Card.Title>

        <Form onSubmit={(e) => handleSubmit(e)}>
          {children}

          <div className='action'>
            <Button variant='primary' onClick={(e) => handleSubmit(e)}>
              {cardTitle}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LoginFormWrap;
