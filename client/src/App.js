import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/');

      setTitles(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Top Stories on Hacker News</h1>
      <ul>
        {titles.map((title, index) => (
          <li key={index}>
            <a href={title.link}>{title.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
