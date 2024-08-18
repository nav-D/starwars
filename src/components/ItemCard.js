import React from 'react';
import './item.css';
import logoImage from '../logo.png';

const Item = ({ item, onClick }) => {
  let gender;
  switch (item.gender) {
    case "male":
      gender = "Male";
      break;
    case "female":
      gender = "Female";
      break;
    case "n/a":
      gender = "Robot";
      break;
    default:
      gender = item.gender;
  }

  return (
    <div className='item-list-card' onClick={() => onClick(item)}>
      <div className="card-content">
        <h3 className="card-name">{item.name}</h3>
        <img className="card-img" src={logoImage} />
        <p className="card-gender">{gender} born in year : {item.birth_year}</p>
      </div>
    </div>
  )
}

export default Item;