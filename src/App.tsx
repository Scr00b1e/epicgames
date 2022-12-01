// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './global.scss'
import Home from './pages/Home';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<Home />} path={'/'}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
