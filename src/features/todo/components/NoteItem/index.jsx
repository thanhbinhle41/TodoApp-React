import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteNoteMethod, editNoteMethod } from '../../services/todoThunk';
import './NoteItem.css';

const NoteItem = ({ note }) => {
  const [isEditNote, setIsEditNote] = useState(false);
  const [currentNote, setCurrentNote] = useState(note);
  const dispatch = useDispatch();

  const handleEditNoteClick = () => {
    setIsEditNote(true);
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNoteMethod(id));
  };

  const handleEditNote = () => {
    dispatch(editNoteMethod(currentNote));
    setIsEditNote(false);
  };

  const handleCurrentNoteChange = (e) => {
    setCurrentNote({
      ...currentNote,
      content: e.target.value,
    });
  };

  const handleCancelEditNote = () => {
    setIsEditNote(false);
  };

  return (
    <li className='note-item'>
      {!isEditNote ? (
        <div className='note-item-wrap '>
          <div className='note-content'>
            {/* <span className='note-label'>Note Content: </span> */}
            <span>{note.content}</span>
          </div>
          <div className='note-action'>
            <Button onClick={() => handleEditNoteClick()}>Edit</Button>
            <Button onClick={() => handleDeleteNote(note.id)}>Delete</Button>
          </div>
        </div>
      ) : (
        <Form>
          <Form.Group className='note-item-wrap'>
            {/* <Form.Label className='note-label'>Note Content:</Form.Label> */}
            <Form.Control
              value={currentNote.content}
              onChange={(e) => handleCurrentNoteChange(e)}
            />
            <div className='note-action'>
              <Button onClick={handleCancelEditNote}>Cancel</Button>
              <Button onClick={handleEditNote}>Save</Button>
            </div>
          </Form.Group>
        </Form>
      )}
    </li>
  );
};

export default NoteItem;
