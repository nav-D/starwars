import React from 'react';
import './item.css';

const Item = ({ item, onClick }) => {
  let gender;
  switch (item.gender) {
    case "male":
      gender = "M";
      break;
    case "female":
      gender = "F";
      break;
    default:
      gender = item.gender;
  }

  return (
    <div className='item-list-card' onClick={() => onClick(item)}>
      <div className="card-content">
        <h3 className="card-name">{item.name}</h3>
        <p className="card-gender">Gender : {gender}</p>
      </div>
    </div>
  )
}

export default Item;