import logo from './logo.svg';
import './App.css';
import ScrapeForm from './components/ScrapeForm';

function App() {
  return (
      <div className='flex flex-col items-center p-8'>
        <h1 className='bg-blue-400 w-full text-center font-bold text-lg p-4'>Web Scraper</h1>
        <ScrapeForm />
      </div>
  );
}

export default App;
