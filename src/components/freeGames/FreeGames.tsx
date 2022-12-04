import React from 'react'
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
                    <button className='btn'>See More</button>
                </div>
                <div className="free__content">
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
                </div>
            </div>
        </div>
    )
}

export default FreeGames