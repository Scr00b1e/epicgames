import React from 'react'
import './intro.scss'

const Intro: React.FC = () => {
    return (
        <div className="container">
            <div className='intro'>
                <div className="intro__main">
                    <img src="../img/christmas.jpg" alt="" className='intro__img' />
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