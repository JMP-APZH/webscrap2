import React, { useState } from 'react';
import axios from 'axios';

const ScrapePage = () => {
  const [data, setData] = useState([]);
  // const [quantite, setQuantite] = useState('');

  const handleClick = () => {
    axios.get('http://localhost:3010/scrape')
      .then(response => {
        console.log('data from response:', response.data[0])
        setData(response.data)
        
        // const masterdata = response.data
        // setMasterdata(response.data[0]);
        // setQuantite(response.quantite);
        // setNom(articles.nom);
        // setQuantite(articles.quantite);
        // console.log('from ScrapePage:', masterdata)
        // (response)
      })
      .catch(error => {
        console.log(error);
      });
      
  };

  return (
    <div>
      <button onClick={handleClick}>Scrape Page</button>
      {data.map((item, index) => (
        <div key={index}>
          <p> {item.nom} </p>
          <p> {item.prix} </p>
        </div>
        
      ))}
      
    </div>
  );
};

export default ScrapePage;
