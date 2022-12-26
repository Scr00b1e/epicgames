import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem, removeItem } from '../../redux/slices/wishSlice/wishSlice'
import './card.scss'

type PropsType = {
    title: string
    image: string
    price: number
    noPrice: number
    id: string
}

const Card: React.FC<PropsType> = ({ id, title, image, price, noPrice }) => {
    const [clicked, setClicked] = React.useState(false)
    //redux
    const dispatch = useDispatch()
    const onClickAdd = () => {
        const item = {
            title,
            image,
            price,
            noPrice,
            id,
            count: 0
        }
        dispatch(addItem(item))
        setClicked(!clicked)
        if (clicked) {
            dispatch(removeItem(id))
        }
    }

    return (
        <div className="card">
            <div className="card__top">
                <img
                    src={clicked ? './img/checked.png' : "./img/add.png"}
                    alt=""
                    className='card__add'
                    onClick={onClickAdd} />
                <Link to={`/games/${id}`}>
                    <img src={image} alt="" className='card__img' />
                    <h4>{title}</h4>
                </Link>
            </div>
            <div className="card__bottom">
                <p>-50%</p>
                <ul>
                    <li>${noPrice}</li>
                    <li>${price}</li>
                </ul>
            </div>
        </div>
    )
};

export default Card