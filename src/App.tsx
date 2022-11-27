// import React from 'react';
import './global.scss'
import Search from "./components/search/Search";
import Card from "./components/card/Card";
import Header from './components/header/Header';
import Intro from './components/Intro/Intro';
import FreeGames from './components/freeGames/FreeGames';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Intro />
      <Card />
      <FreeGames />
    </div>
  );
}

export default App;
