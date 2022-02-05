import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import NoteItem from '../../components/NoteItem';
import {
  addNoteMethod,
  getAllNoteMethod,
  getOneTodoMethod
} from '../../services/todoThunk';
import './DetailTodo.css';

const DetailTodoPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { currentTodo, currentNoteList } = useSelector((state) => state.todo);
  const [newNote, setNewNote] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddNote = () => {
    dispatch(
      addNoteMethod({
        content: newNote,
      })
    );
    setNewNote('');
  };

  useEffect(() => {
    dispatch(getOneTodoMethod(id));
    dispatch(getAllNoteMethod());
  }, [id, dispatch]);

  return (
    <div className='container-wrap'>
      <Card>
        <Card.Title>Detail Todo</Card.Title>
        <Card.Body>
          <div className='detail-todo-body'>
            <div className='detail-item'>
              <div className='detail-label'>Todo Name:</div>
              <div className='detail-content'>{currentTodo.name}</div>
            </div>
            <div className='detail-item'>
              <div className='detail-label'>Is done:</div>
              <div className='detail-content'>
                {currentTodo.isDone ? 'True' : 'False'}
              </div>
            </div>
            <div className='todo-note'>
              <div className='detail-label'>Note:</div>

              <ul className='note-list'>
                {currentNoteList.map((note) => (
                  <NoteItem key={note.id} note={note} />
                ))}
              </ul>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className='action-wrap'>
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleAddNote}>Add Note</Button>
          <Form.Control
            value={newNote}
            placeholder='Enter new note'
            onChange={(e) => setNewNote(e.target.value)}
          />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default DetailTodoPage;
