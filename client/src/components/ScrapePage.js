import React, { useState } from 'react';
import axios from 'axios';

const ScrapePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleClick = () => {
    axios.get('http://localhost:3001/scrape')
      .then(response => {
        setTitle(response.data.title);
        setDescription(response.data.description);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Scrape Page</button>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ScrapePage;
