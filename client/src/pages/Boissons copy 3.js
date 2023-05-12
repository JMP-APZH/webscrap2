import React, { useState } from 'react';
import axios from 'axios';


const Boissons = () => {

    const [data, setData] = useState([]);
  // const [quantite, setQuantite] = useState('');

  const handleClick = () => {
    axios.get('http://localhost:3011/scrape-boissons')
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
        <>
        <div className='flex flex-col items-center bg-blue-500 w-screen h-screen p-4'>
        <div>
        <h1 className='text-center pb-6'>Dairy prices review</h1>
        <div className='text-center bg-black text-white w-72 rounded-full mx-5'>
           <button onClick={handleClick}>Scrape Boissons</button>
           </div> 
        </div>
        
            <div>
          
      
      <div className='grid grid-cols-2'>
      {data.map((item, index) => (
        <div key={index} className="text-center p-4">
          {/* <ul key={index}> */}
            {/* <li> */}
              <p className='text-center'> {item.nom} </p>
              <div className='flex gap-6 justify-center'>
                <img
                  className=""
                  src={item.img}
                  alt={item.nom}
                  width="110"
                  height="110"
                />
              <div className='flex flex-col gap-3'>
                <p> {item.prix} </p>
                <p> {item.prixspecial} </p>
                <p> {item.quantite2} </p>
                <p> {item.prixunite} </p>
              </div>
              <div className='flex justify-center bg-pink-400 w-60'>
                <img
                  className="p-4"
                  src={item.nutriscore}
                  width="110"
                  height="110"
                />
              </div>
              </div>
              
              
              
              
              <p> {item.url} </p>
            {/* </li> */}
          {/* </ul> */}
          

          
        </div>
        
      ))}
      </div>
      
      
    </div>
        </div>
        
        </>
    )
     
  }

  export default Boissons;