import React from 'react';
import { Form } from 'react-bootstrap';
import './InfoItem.css';

const InfoItem = ({ editable, infoValue, infoLabel, setInfo }) => {
  return (
    <Form.Group className='info-item-gr'>
      <Form.Label className='info-item-label'>{infoLabel}</Form.Label>
      <Form.Control
        disabled={!editable}
        value={infoValue}
        onChange={editable ? (e) => setInfo(e.target.value) : () => {}}
      />
    </Form.Group>
  );
};

export default InfoItem;
