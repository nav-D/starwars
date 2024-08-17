import React, { useState, useEffect } from 'react';
import constants from '../config';
import Item from '../components/Item_card';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import axios from 'axios';
import "./characters.css"

const Characters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getCharacters = async () => {
    try {
      const apiResponse = await axios.get(constants.BASE_URL);
      setCharacters(apiResponse.data);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  const handleCardClick = (item) => {
    setSelectedCharacter(item);
    setIsModalOpen(true);
  }
  const handleCloseModal = () => {
    setSelectedCharacter(null);
    setIsModalOpen(false);
  }

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className='page-heading'>Star Wars Characters</h1>
      <div className='item-list'>
        {characters?.results?.map((item, index) => (
          <Item key={index} item={item} onClick={handleCardClick} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} item={selectedCharacter} />
    </div>
  )

};

export default Characters;