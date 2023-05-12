// import ScrapePage from "../components/ScrapePage";
import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {

    const [data, setData] = useState([]);
  // const [quantite, setQuantite] = useState('');

  const handleClick = () => {
    axios.get('http://localhost:3020/scrape-categories')
      .then(response => {
        console.log('data from response:', response.data)
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
        <>
        <h1 className="text-yellow-400 text-center w-screen">Categories</h1>
        <div className='flex flex-col items-center bg-blue-500 w-screen h-screen p-4'>
        <div>
        <h1 className='text-center pb-6'>Category overview</h1>
        <div className='text-center bg-black text-white w-72 rounded-full mx-5'>
           <button onClick={handleClick}>Scrape Categories</button>
           </div> 
        </div>
        
            <div>
          
      
      <div className='grid grid-cols-2'>
      {data.map((item, index) => (
        <div key={index} className="text-center p-4">
          
              <p className='text-center'> {item.nomcat} </p>
              
              <div className='flex justify-center bg-pink-400 w-60'>
                <img
                  className="p-4"
                  src={item.img}
                  width="110"
                  height="110"
                />
              </div>

          
        </div>
        
      ))}
      </div>
      
      
    </div>
        </div>
        
        </>
    )
    
  }