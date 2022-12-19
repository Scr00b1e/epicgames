import React from 'react'
import './card.scss'

type PropsType = {
    title: string
    image: string
    price: number
    noPrice: number
    id: string
}

const Card: React.FC<PropsType> = ({ title, image, price, noPrice }) => {
    return (
        <div className="card">
            <div className="card__top">
                <img src="./img/add.png" alt="" className='card__add' />
                <img src={image} alt="" className='card__img' />
                <h4>{title}</h4>
            </div>
            <div className="card__bottom">
                <p>-50%</p>
                <ul>
                    <li>̶¥̶{noPrice}</li>
                    <li>¥{price}</li>
                </ul>
            </div>
        </div>
    )
};

export default Card