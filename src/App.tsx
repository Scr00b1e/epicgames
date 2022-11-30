// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './global.scss'
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<Home />} path={'/'}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
