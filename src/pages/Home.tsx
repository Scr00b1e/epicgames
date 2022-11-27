import React from 'react'
import Search from "../components/search/Search";
import Card from "../components/card/Card";
import Intro from '../components/Intro/Intro';
import FreeGames from '../components/freeGames/FreeGames';

const Home: React.FC = () => {
    return (
        <div className='home'>
            <Search />
            <Intro />
            <Card />
            <FreeGames />
        </div>
    )
}

export default Home