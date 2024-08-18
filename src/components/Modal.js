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
          <div className='modal-col'>
            <p><b>Gender :</b> {item.gender}</p>
            <p><b>Year Of Birth :</b> {item.birth_year}</p>
            <p><b>Height :</b> {item.height} cm</p>
          </div>
          <div className='modal-col'>
            <p><b>Hair Color :</b> {item.hair_color}</p>
            <p><b>Eye Color :</b>  <span style={{ color: item.eye_color || "black" }}>{item.eye_color}</span></p>
            <p><b>Mass :</b> {item.mass} kg</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Modal;