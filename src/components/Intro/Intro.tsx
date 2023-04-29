import React from 'react'
import './intro.scss'

const Intro: React.FC = () => {
    return (
        <div className="container">
            <div className='intro'>
                <div className="intro__main">
                    <img src="https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg" alt="" className='intro__img' />
                    <div className="intro__words">
                        <p className='intro__text'>
                            sladfjklasjdfjasdfjskldfjlksadjfsdifjksdj sfjasoidfjejlk jklsdjfoa sjekjflkjsd ojflke jklwjefoi jsdghwowiofjlsdg,.msdjiwioxjkw tjowedsj
                        </p>
                    </div>
                </div>
                <ul className='intro__list'>
                    <li className='intro__item'>
                        <img src="https://via.placeholder.com/100" alt="" />
                        <h1 className='intro__title'>Item stuff</h1>
                    </li>
                    <li className='intro__item'>
                        <img src="https://via.placeholder.com/100" alt="" />
                        <h1 className='intro__title'>Item stuff</h1>
                    </li>
                    <li className='intro__item'>
                        <img src="https://via.placeholder.com/100" alt="" />
                        <h1 className='intro__title'>Item stuff</h1>
                    </li>
                    <li className='intro__item'>
                        <img src="https://via.placeholder.com/100" alt="" />
                        <h1 className='intro__title'>Item stuff</h1>
                    </li>
                    <li className='intro__item'>
                        <img src="https://via.placeholder.com/100" alt="" />
                        <h1 className='intro__title'>Item stuff</h1>
                    </li>
                    <li className='intro__item'>
                        <img src="https://via.placeholder.com/100" alt="" />
                        <h1 className='intro__title'>Item stuff</h1>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Intro