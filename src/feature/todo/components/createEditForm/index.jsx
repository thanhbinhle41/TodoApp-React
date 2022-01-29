import React from 'react';
import { Form } from 'react-bootstrap';

const CreateEditTodoForm = (props) => {
    const { todoName, setTodoName} = props;

    const handleInputNameChange = (e) => {
        setTodoName(e.target.value)
        
    }

    return <div> 
        <Form>
            <Form.Group>
                <Form.Label>Todo name:</Form.Label>
                <input placeholder='Enter name' onChange={(e) => handleInputNameChange(e)} value={todoName} />
                {/* <Form.Control placeholder='Enter name' onChange={(e) => handleInputNameChange(e)}  /> */}
            </Form.Group>
        </Form>
    </div>;
};

export default CreateEditTodoForm;
