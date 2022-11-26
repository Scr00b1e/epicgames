import React from 'react';
import Header from './components/header/Header'
import './global.scss'
import Search from "./components/search/Search";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Card/>
    </div>
  );
}

export default App;
