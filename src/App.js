import React, { useEffect, useState } from 'react';
import SwLogo from './assets/SwLogo.png';
import { getFilmsRequest } from './service/content.service';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFilmsRequest();
      console.log(response)
      setFilms(response.data);
      setIsLoading(false);
    }

    fetchData();
  }, [])
  
    return (
    <div className="App">
      <header className="App-header"> 
      <img className="Header-logo" src={SwLogo} alt={"SWlogo"} />       
      {isLoading && <p>Wait Im Loading comments for you</p>}
      </header>
    </div>
  );
}

export default App;
