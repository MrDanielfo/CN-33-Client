import React from 'react';
import './App.css';
import NavBar from './components/Layout/NavBar';
import Restaurants from './components/Restaurants/Restaurants';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Restaurants />
    </div>
  );
}

export default App;
