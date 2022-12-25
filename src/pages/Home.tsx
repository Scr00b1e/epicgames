import React from 'react'
import Card from "../components/card/Card";
import Intro from '../components/Intro/Intro';
import FreeGames from '../components/freeGames/FreeGames';
import Browse from '../components/browse/Browse';
import { Link } from 'react-router-dom';
import Skeleton from '../components/card/Skeleton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'

import 'swiper/scss'
import 'swiper/scss/navigation'


const Home: React.FC = () => {
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    const GetItems = async () => {
        try {
            setIsLoading(true)
            await fetch('https://6290eebe665ea71fe13e1a80.mockapi.io/pizza/games')
                .then((res) => {
                    return res.json()
                }).then((arr) => {
                    setItems(arr)
                    setIsLoading(false)
                })
        } catch {
            alert('Error!')
        }
    }

    React.useEffect(() => {
        GetItems()
    }, [])

    const cards = items.map((obj: any) => (
        <SwiperSlide>
            <Link key={obj.id} to={`/games/${obj.id}`}>
                <Card {...obj} />
            </Link>
        </SwiperSlide>
    ))

    const skeletons = [...new Array(6)].map((_, id) => <Skeleton key={id} />)

    return (
        <div className='home'>
            <Intro />
            <div className="container">
                <div className="sale__top">
                    <h3>Games on Sale</h3>
                </div>
                <div className="sale__content">
                    <Swiper
                        slidesPerView={6}
                        navigation={true}
                        modules={[Navigation]}>
                        {
                            isLoading ? skeletons : cards
                        }
                    </Swiper>
                </div>
            </div>
            <FreeGames />
            <Browse />
        </div>
    )
}

export default Home