import React from 'react';
import { Form } from 'react-bootstrap';

const CreateEditTodoForm = (props) => {
    const { todo} = props;

    console.log("test form" ,todo);
    const handleInputNameChange = (e) => {
        console.log("event", e);
    }

    return <div> 
        <Form>
            <Form.Group>
                <Form.Label>Todo name:</Form.Label>
                <Form.Control placeholder='Enter name' onChange={(e) => handleInputNameChange(e)} value={todo ? todo.name : ""} />
            </Form.Group>
        </Form>
    </div>;
};

export default CreateEditTodoForm;
