import React, { useState } from 'react';
import axios from 'axios';

function ScrapeForm() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log('the url entered is:', url)
      const res = await axios.get(`/api/scrape?url=${url}`);
      setData(res.data);
      console.log('the data to get back is:', res.data)
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className='my-8'>
      <form onSubmit={handleSubmit} className='flex flex-row w-36'>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button type="submit" className='ml-6 border border-blue-700 p-2 bg-green-500 font-bold'>Scrape</button>
      </form>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default ScrapeForm;
