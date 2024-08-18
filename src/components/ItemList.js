import React from 'react';
import Item from './ItemCard';

const ItemList = ({ itemList, handleCardClick }) => {

  return (
    <div className='item-list'>
      {itemList.map((item, index) => (
        <Item key={index} item={item} onClick={handleCardClick} />
      ))}
    </div>
  )
}

export default ItemList;