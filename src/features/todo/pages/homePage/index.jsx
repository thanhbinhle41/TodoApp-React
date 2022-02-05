import React, { useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
import { logoutMethod } from '../../../auth/services/authSlice';
import { getUserInfoMethod } from '../../../auth/services/authThunk';
import {
  deleteTodoMethod,
  editTodoMethod,
  getAllTodoMethod,
} from '../../services/todoThunk';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {}, []);

  const dispatch = useDispatch();

  // name, isDone, userId, id
  const todoList = useSelector((state) => state.todo.todoList);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutMethod());
    navigate(routeList.LOGIN);
  };

  const handleEdit = (todo) => {
    navigate(routeList.EDIT_TODO, { state: todo });
  };

  const handleAddTodo = () => {
    navigate(routeList.CREATE_TODO);
  };

  const handleView = (id) => {
    navigate(`${routeList.DETAIL_TODO}-${id}`);
  };

  const handleEditProfile = () => {
    navigate(routeList.MY_PROFILE);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoMethod(id));
  };

  const handleIsDoneChange = (e, todo) => {
    console.log('first', e.target.checked, todo);
    const newTodo = { ...todo, isDone: e.target.checked ? 1 : 0 };
    dispatch(editTodoMethod(newTodo));
  };

  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllTodoMethod());
    dispatch(getUserInfoMethod(userId));
  }, [dispatch]);

  return (
    <div className='container-wrap'>
      <h1>todos</h1>
      <div className="filter">
          <Button className="all-border" onClick={() => handleEditProfile()}>
            Profile
          </Button>
          <Button className="progress-border" onClick={() => handleAddTodo()}>
            Add Todo
          </Button>
          <Button className="done-border" onClick={() => handleLogout()}>
            Logout
          </Button>
      </div>
      <div className='main-content'>
        <input
          className="todo-input" placeholder="What needs to be done?" disabled="true"
        />
        <ul style={{padding: "0px"}}>
          {todoList.map((todo) =>(
            <li>
              <div>
                <input
                  type='checkbox'
                  name='isDone' id='is-done'
                  style={{"margin-right": "12px"}}
                  onChange={(e) => handleIsDoneChange(e, todo)}
                  checked={todo.isDone}
                />
                <span>{todo.name}</span>
              </div>
              <div>
                <span className="edit-text" style={{"margin-right": "12px"}} 
                  onClick={() => handleEdit(todo)}>
                  Edit
                </span>
                <span className="info-text" style={{"margin-right": "12px"}} 
                  onClick={() => handleView(todo.id)}>
                  Info
                </span>
                <span className="delete-text" onClick={() => handleDeleteTodo(todo.id)}>Delete</span>
              </div>
            </li>
          ))}
          <li>
            <div>
              <input
                type='checkbox'
                name='isDone' id='is-done'
                style={{"margin-right": "12px"}}
              />
              <span>Alo123</span>
            </div>
            <div>
              <span className="edit-text" style={{"margin-right": "12px"}} >Edit</span>
              <span className="info-text" style={{"margin-right": "12px"}} >Info</span>
              <span className="delete-text">Delete</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
