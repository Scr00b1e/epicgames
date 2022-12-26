import React from 'react'
import { Link } from 'react-router-dom'
import './freeGames.scss'

const FreeGames: React.FC = () => {
    return (
        <div className='container'>
            <div className="free">
                <div className="free__top">
                    <div>
                        <img src="./img/gift.png" alt="" />
                        <h1>Free Games</h1>
                    </div>
                    <Link to={'/catalog'}>
                        <button className='btn'>See More</button>
                    </Link>
                </div>
                <div className="free__content">
                    <Link to={'/catalog'}>
                        <div className="free__item">
                            <img src="./img/img1.png" alt="" />
                            <div className="free__info">
                                <p>Free now</p>
                            </div>
                            <div className="free__words">
                                <h4>Borderland 3</h4>
                                <p>till 1/29/23 23:00</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/catalog'}>
                        <div className="free__item">
                            <img src="./img/img1.png" alt="" />
                            <div className="free__info">
                                <p>Free now</p>
                            </div>
                            <div className="free__words">
                                <h4>Borderland 3</h4>
                                <p>till 1/29/23 23:00</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FreeGames