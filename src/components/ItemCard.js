import React, { useState } from 'react';
import './item.css';
import logoImage from '../logo.png';
import constants from '../config';

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
  const [isHovered, setIsHovered] = useState(false);
  const cardColorNumber = item.species?.[0]?.split('/').slice(-2, -1)[0];
  const cardColor = constants.SPECIES_COLOR[cardColorNumber || 1];
  const customStyle = {
    backgroundColor: isHovered ? '#f0f0f0' : cardColor, // Change background color on hover
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    color: isHovered ? 'black' : 'white'
  }
  return (
    <div className='item-list-card' onClick={() => onClick(item)} style={customStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="card-content" >
        <h3 className="card-name">{item.name}</h3>
        <img className="card-img" src={logoImage} alt='item.name' />
        <p className="card-gender">{gender} born in year : {item.birth_year}</p>
      </div>
    </div >
  )
}

export default Item;