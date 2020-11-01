import React from 'react';
import NavBar from './components/NavBar/NavBar';
import GameBoard from './components/GameBoard/GameBoard';
// import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header />
      <NavBar />
      <GameBoard />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
