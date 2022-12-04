// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './global.scss'
import Home from './pages/Home';
import Footer from "./components/footer/Footer";
import FullGame from './components/FullGame/FullGame';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<Home />} path={'/'}/>
          <Route element={<FullGame/>} path={'/games/:id'}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
