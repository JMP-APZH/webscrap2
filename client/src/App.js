import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrapePage from './components/ScrapePage';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/scrape');

      setArticles(data);
      
    }

    fetchData();
    // console.log('data: ', articles);
  }, []);

  return (
    <div>
      <div className='w-full bg-blue-300'>
        <ScrapePage />
      </div>
      
      <h1>Liste d'articles 123-click </h1>
      <ul>
        {/* {data.map((item, index) => (
          <li key={index}>
            <p href={item.nom}>{item.quantite}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default App;
