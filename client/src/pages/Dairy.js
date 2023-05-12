import React, { useState } from 'react';
import axios from 'axios';


const Dairy = () => {

    const [data, setData] = useState([]);
  // const [quantite, setQuantite] = useState('');
  // const web = 'https://martinique.123-click.com';

  const handleClick = () => {
    axios.get('http://localhost:3010/scrape')
      .then(response => {
        console.log('data from response:', response.data)
        setData(response.data)
        
        // const web = "https://martinique.123-click.com"
        // const srcmodif = web.concat(response.data[0].nutriscore)

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
        <h1 className="text-yellow-400 text-center w-screen">Dairy</h1>
        <div className='flex flex-col items-center bg-blue-500 w-screen h-screen p-4'>
        <div>
        <h1 className='text-center'>Dairy prices review</h1>
        <div className='text-center bg-black text-white w-72 rounded-full m-5'>
           <button onClick={handleClick}>Scrape Dairy</button>
           </div> 
        </div>
        
            <div>
          
      
      <div className='grid grid-cols-2 bg-white h-auto'>
      {data.map((item, index) => (
        <div key={index} className="text-center p-4 border m-2">
        <div className='flex right-0 w-24 absolute '>
                <img
                  className="p-4"
                  src={item.nutrifull}
                  width="150"
                  height="150"
                />
              </div>
        <div className='flex gap-6 justify-center'>
                <img
                  className=""
                  src={item.img}
                  alt={item.nom}
                  width="200"
                  height="200"
                />
                
                </div>
                <div className='flex items-center'>
                  <p className='text-center font-semibold px-4'> {item.nom} </p>
                  <div>
                    <p className='text-center font-semibold p-4 text-red-700 border border-blue-700 mb-1 text-xs'> {item.prix} </p>
                    <p className='text-center font-semibold p-4 text-green-700 border border-red-700 text-xs'> {item.prixspecial} </p>
                    <p className='text-xs'> {item.prixunite} </p>
                  </div>
                  
                </div>
              
              
              <div className='flex flex-row items-center'>
                
                <p className='text-blue-600 font-bold text-xs px-3'> {item.quantite2} </p>
                
                </div>
                {/* <p> {item.nutriscore} </p> */}
                {/* <p> {item.nutrifull} </p> */}
              
              
              
              
              
              
              
              
              {/* <p> {item.url} </p> */}
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

  export default Dairy;