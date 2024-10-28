// src/pages/List.js
import React, { useState } from 'react';
import './App.css';
import mov1 from './img/mov1.png';
import mov2 from './img/mov2.png';
import mov3 from './img/mov3.png';
import logout from './img/logout.png';
import plus from './img/plus.png';

const moviesData = [
  { id: 1, title: 'Movie 1', year: 2021, image: mov1 },
  { id: 2, title: 'Movie 1', year: 2021, image: mov2 },
  { id: 3, title: 'Movie 1', year: 2021, image: mov2 },
  { id: 4, title: 'Movie 1', year: 2021, image: mov3 },
  { id: 5, title: 'Movie 1', year: 2021, image: mov1 },
  { id: 6, title: 'Movie 1', year: 2021, image: mov2 },
  { id: 7, title: 'Movie 1', year: 2021, image: mov2 },
  { id: 8, title: 'Movie 1', year: 2021, image: mov3 },
];

const itemsPerPage = 8;

function List() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the paginated items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedMovies = moviesData.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(moviesData.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="list-container">
      <header className="list-header">
        <h1>My movies <img src={plus} /></h1>
        <div className="header-actions">
          <button className="add-movie"></button>
          <button className="logout">Logout <img src={logout} /></button>
        </div>
      </header>

      <div className="movies-grid">
        {selectedMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
        ))}
      </div>

      <footer className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <span className='active'>1</span>
        <span>2</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </footer>
    </div>
  );
}

export default List;
