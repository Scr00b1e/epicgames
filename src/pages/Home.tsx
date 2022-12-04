import React from 'react'
import Search from "../components/search/Search";
import Card from "../components/card/Card";
import Intro from '../components/Intro/Intro';
import FreeGames from '../components/freeGames/FreeGames';
import Browse from '../components/browse/Browse';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
    const [items, setItems] = React.useState([])

    const GetItems = async () => {
        try {
            await fetch('https://6290eebe665ea71fe13e1a80.mockapi.io/pizza/games')
                .then((res) => {
                    return res.json()
                }).then((arr) => {
                    setItems(arr)
                })
        } catch {
            alert('Error!')
        }
    }

    React.useEffect(() => {
        GetItems()
    }, [])

    return (
        <div className='home'>
            <Search />
            <Intro />
            <div className="container">
                <div className="sale__top">
                    <h3>Games on Sale</h3>
                    <div className="sale_carousel">
                        <button className='sale__btn'>
                            <img src="img/strelka2.png" alt="" />
                        </button>
                        <button className='sale__btn'>
                            <img src="img/strelka.png" alt="" />
                        </button>
                    </div>
                </div>
                <div className="sale__content">
                    {
                        items.map((obj: any) => (
                            <Link key={obj.id} to={`/games/${obj.id}`}>
                                <Card {...obj} />
                            </Link>
                        ))
                    }
                </div>
            </div>
            <FreeGames />
            <Browse />
        </div>
    )
}

export default Home