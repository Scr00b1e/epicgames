// import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Header from './components/header/header';
import './global.scss'
import Home from './pages/Home';
import Footer from "./components/footer/Footer";
import FullGame from './components/FullGame/FullGame';
import Navigate from './components/navigate/Navigate';
import Catalog from './pages/browse/Catalog';
import Wishlist from './pages/wishlist/Wishlist';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navigate />
      <Routes>
        <Route element={<Home />} path={'/'} />
        <Route element={<Catalog />} path={'/catalog'} />
        <Route element={<FullGame />} path={'/games/:id'} />
        <Route element={<Wishlist />} path={'/wishlist'} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
