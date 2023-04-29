import React from 'react'
import Card from "../components/card/Card";
import Intro from '../components/Intro/Intro';
import FreeGames from '../components/freeGames/FreeGames';
import Browse from '../components/browse/Browse';
import Skeleton from '../components/card/Skeleton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'
import NotFound from '../components/notFound/NotFound';
import useFetch from '../hooks/useFetch';

import 'swiper/scss'
import 'swiper/scss/navigation'

const Home: React.FC = () => {
    const { items, error, isLoading } = useFetch('https://6290eebe665ea71fe13e1a80.mockapi.io/pizza/games')

    const cards = items.map((obj: any) => (
        <SwiperSlide>
            <Card key={obj.id}  {...obj} />
        </SwiperSlide>
    ))

    const skeletons = [...new Array(6)].map((_, id) => <Skeleton key={id} />)

    if (error) {
        return (
            <div className='home'>
                <NotFound />
            </div>
        )
    }

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