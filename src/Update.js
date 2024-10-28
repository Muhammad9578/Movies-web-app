// CreateMovie.jsx
import React, { useState } from 'react';
import './App.css';

function Update() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  // Handle file input change and set preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, year, imagePreview });
    alert('Movie created successfully!');
  };

  const handleCancel = () => {
    setTitle('');
    setYear('');
    setImagePreview('');
  };

  return (
    <div className="create-movie-container">
      <h1>Edit</h1>

      {/* Image Upload and Preview Section */}
      <div className="image-upload">
        <div className="image-preview desk">
          {imagePreview ? (
            <img src={imagePreview} alt="Movie Preview" />
          ) : (
            <p>📥 Drop an image here</p>
          )}
        </div>
        {/* <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input"
        /> */}
        
      <form className="movie-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Publishing year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
<div className="image-preview mob">
          {imagePreview ? (
            <img src={imagePreview} alt="Movie Preview" />
          ) : (
            <p>📥 Drop an image here</p>
          )}
        </div>
        {/* Form Buttons */}
        <div className="form-buttons">
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
      </div>
 

    </div>
  );
}

export default Update;
