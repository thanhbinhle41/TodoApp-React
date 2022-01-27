import React, { useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { router } from '../../../../navigation/routers';
import { removeLocalStorage } from '../../../../services/localStorage';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => { 
  }, []);

  const todoList = [
    {
      id: '1',
      userId: '2',
      name: 'Todo 1',
      isDone: false
    },
    {
      id: '22',
      userId: '3',
      name: 'Todo 2',
      isDone: true
    }
  ]

  const navigate = useNavigate();

  const handleLogout = () => {
    removeLocalStorage('currentId');
    navigate(router.LOGIN);
  };

  const handleEdit = (todo) => {
    navigate(router.EDIT_TODO, {state:  todo })
  }

  const handleAddTodo = () => {
    navigate(router.CREATE_TODO)
  }

  const handleView = () => {
    navigate(router.DETAIL_TODO)
  }

  const handleEditProfile = () => {
    navigate(router.MY_PROFILE)
  }

  const handleDeleteTodo = () => { }

  const handleIsDoneChange = (e) => { } 


  return (
    <div className='home_page'> 
      <div className="container_wrap">
        <Card className='user_info'>
          <Card.Title className="card_title">
            <div className="title">
              Name
            </div>
            <Button variant='secondary' onClick={() => handleEditProfile()} >Profile</Button>
            <Button className="logout_btn" variant='secondary' onClick={() => handleLogout()}>Logout</Button>
          </Card.Title>

        </Card>

        <Card>
          <Card.Title  className="card_title">
            <div className="title">
              TODOLIST
            </div>
            <Button className="btn" variant='primary'  onClick={() => handleAddTodo()} >Add Todo</Button>
          </Card.Title>
          <Card.Body>
            <ListGroup>
              {
                todoList.map(item => (
                  <ListGroup.Item key={item.id} className='todo_item'>
                    <div className="todo_content">
                      <div className="is_done">
                        <input type="checkbox" name="isDone" id="is_done" onChange={(e) => handleIsDoneChange()} checked={item.isDone} />
                      </div>
                      <div className="todo_name">
                        {item.name} 
                      </div>
                    </div>
                    <div className="action_btn">
                      <Button className="btn" variant='primary'  onClick={() => handleEdit(item)}>Edit</Button  >
                      <Button className="btn" variant='primary'  onClick={() => handleView()} >View</Button >
                      <Button className="btn" variant='danger'  onClick={() => handleDeleteTodo()} >Delete</Button >
                    </div>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
