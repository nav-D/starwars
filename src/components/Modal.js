import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <h2 className='modal-title'>{item.name}</h2>
        <div className='modal-info'>
          <p>Gender = {item.gender}</p>
          <p>Height = {item.height} cm</p>
          <p>Mass = {item.mass} kg</p>
          <p>Color of hair = {item.hair_color}</p>
          <p>Year of birth = {item.birth_year}</p>
          <p>Color of their eye = {item.eye_color}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;