import React from 'react';
import './loader.css'; // Optional: for custom styles

const Loader = () => {
  return (
    <div className="loader">
      {/* You can use any loader animation or spinner here */}
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;