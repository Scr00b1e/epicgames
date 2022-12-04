import React from 'react'
import './spiderpage.scss'

const Spiderpage: React.FC = () => {
    return (
        <div className={'spider'}>
            <div className="container">

            <div className="spider_left">

                <div className="left_top">

                     <h1>MARVEL Spider-Man: Miles Morales</h1>

                    <div className="raiting">
                        <div className="stars">
                    <img src="./img/stars.png" alt=""/>
                    <h3>4.8</h3>
                        </div>
                    <p>great boss battles</p>
                    <h5>diverse cast of characters</h5>
                    </div>

                    <div className="miles_img">
                    <img src="./img/milesmorales.webp" alt=""/>
                    </div>

                    <div className="trailer">
                        <img src="./img/milesmorales.webp" alt=""/>
                        <img src="./img/milesmorales.webp" alt=""/>
                        <img src="./img/milesmorales.webp" alt=""/>
                        <img src="./img/milesmorales.webp" alt=""/>
                    </div>

                </div>

                <div className="left_bottom">
                    
                </div>

            </div>

            <div className="spider_right">
                <div className="right_top"></div>
                <div className="right_bottom"></div>
            </div>
            </div>
        </div>

    )
};

export default Spiderpage