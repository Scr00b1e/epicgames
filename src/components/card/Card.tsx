import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/slices/wishSlice/wishSlice'
import './card.scss'

type PropsType = {
    title: string
    image: string
    price: number
    noPrice: number
    id: string
    count: number
}

const Card: React.FC<PropsType> = ({ title, image, price, noPrice }) => {
    const [clicked, setClicked] = React.useState(false)
    //redux
    const dispatch = useDispatch()
    const onClickAdd = () => {
        const item: PropsType = {
            title,
            image,
            price,
            noPrice,
            id: '',
            count: 0
        }
        dispatch(addItem(item))
        setClicked(!clicked)
    }

    return (
        <div className="card">
            <div className="card__top">
                <img
                    src={clicked ? './img/checked.png' : "./img/add.png"}
                    alt=""
                    className='card__add'
                    onClick={onClickAdd} />
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