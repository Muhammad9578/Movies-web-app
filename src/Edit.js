// src/EmptyMovieList.js
import React from 'react';
import './App.css'; // Import the CSS styles

const EmptyMovieList = ({ onAddMovie }) => {
  return (
    <div className="empty-movie-container">
      <h2>Your movie list is empty</h2>
      <button onClick={onAddMovie}>Add a new movie</button>
    </div>
  );
};

export default EmptyMovieList;
