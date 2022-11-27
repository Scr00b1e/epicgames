import React from 'react'
import Search from "../components/search/Search";
import Card from "../components/card/Card";
import Intro from '../components/Intro/Intro';
import FreeGames from '../components/freeGames/FreeGames';
import Browse from '../components/browse/Browse';

const Home: React.FC = () => {
    return (
        <div className='home'>
            <Search />
            <Intro />
            <Card />
            <FreeGames />
            <Browse />
        </div>
    )
}

export default Home