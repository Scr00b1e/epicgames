import React from 'react'
import './card.scss'

const Card: React.FC = () => {
    return (
        <div className="card">
            <div className="card__top">
                <img src="img/rdr2.png" alt="" />
                <h4>Red Dead Redemption 2</h4>
            </div>
            <div className="card__bottom">
                <p>-50%</p>
                <ul>
                    <li>̶¥̶2̶2̶8̶̶</li>
                    <li>¥114</li>
                </ul>
            </div>
        </div>
    )
};

export default Card