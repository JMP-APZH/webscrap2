import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrapePage from './components/ScrapePage';

import { Router, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"

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
       <Navbar />
      <div className="container">
        {/* <Router> */}
          <Routes>
          
            <Route path="/" element={<Home />} />
            {/* <Route path="/pricing" element={<Pricing />} /> */}
            <Route path="/about" element={<About />} />
          </Routes>
        {/* </Router> */}
        
      </div>
      <div className='w-full bg-blue-300'>
        <ScrapePage />
      </div>
      
      {/* <h1>Liste d'articles 123-click </h1> */}
      {/* <ul> */}
        {/* {data.map((item, index) => (
          <li key={index}>
            <p href={item.nom}>{item.quantite}</p>
          </li>
        ))} */}
      {/* </ul> */}
    </div>
  );
}

export default App;
