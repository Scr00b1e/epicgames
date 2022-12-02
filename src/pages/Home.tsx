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
            {/* <Card /> */}
            <div className="container">
                <div className="sale__top">
                    <h3>Games on Sale</h3>
                    <div className="sale_carousel">
                        <button className='sale__btn'>
                            <img src="img/strelka2.png" alt=""/>
                        </button>
                        <button className='sale__btn'>
                            <img src="img/strelka.png" alt=""/>
                        </button>
                    </div>
                </div>
                <div className="sale__content">
                    <Card/>
                </div>
            </div>
            <FreeGames />
            <Browse />
        </div>
    )
}

export default Home