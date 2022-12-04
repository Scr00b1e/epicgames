import React from 'react';
import Header from "./components/header/header";
import './global.scss'
import Search from "./components/search/Search";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Spiderpage from "./components/spiderpage/Spiderpage"

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Card/>
      <Footer/>
      <Spiderpage/>
    </div>
  );
}
export default App;
