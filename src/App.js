import React from 'react';
import SwLogo from './assets/SwLogo.png';
import FilmsView from './components/FilmsView/FilmsView';
import './App.css';

function App() {
  
    return (
    <div className="App">
      <header className="App-header"> 
        <img className="App-logo" src={SwLogo} alt={"StarWarslogo"} />
      </header>
      <FilmsView />
    </div>
  );
}

export default App;
