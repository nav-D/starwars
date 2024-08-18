import React, { useState, useEffect } from 'react';
import constants from '../config';
import Item from '../components/ItemCard';
import ItemList from '../components/ItemList';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import "./characters.css"

const Characters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getCharacters = async (query = '') => {
    try {
      setLoading(true);
      let url = constants.BASE_URL;
      if (query) {
        url += '?search=' + query;
      }
      const apiResponse = await axios.get(url, {
        params: {
          page: currentPage,
        }
      });
      setCharacters(apiResponse.data);
      const totalPageRemainder = (apiResponse.data.count || 0) % 10 === 0 ? false : true
      setTotalPages(Math.floor((apiResponse.data?.count || 0) / 10) + (totalPageRemainder ? 1 : 0));
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    getCharacters();
  }, [currentPage]);

  const handleCardClick = (item) => {
    setSelectedCharacter(item);
    setIsModalOpen(true);
  }
  const handleCloseModal = () => {
    setSelectedCharacter(null);
    setIsModalOpen(false);
  }

  const handleSearch = (query) => {
    getCharacters(query);
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className='page-heading'>
        <h1>Star Wars Characters</h1>
      </div>
      <SearchBar onSearch={handleSearch} />
      <ItemList handleCardClick={handleCardClick} itemList={characters?.results} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} item={selectedCharacter} />
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )

};

export default Characters;