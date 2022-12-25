import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/slices/wishSlice/wishSlice'

type WishlistType = {
  title: string
  image: string
  price: number
  id: string
}

const WishlistItem: React.FC<WishlistType> = ({ id, title, image, price }) => {
  const dispatch = useDispatch()
  const onClickRemove = () => {
    if (window.confirm('Are u sure u wanna remove?')) {
      dispatch(removeItem(id))
    }
  }

  return (
    <div className='wishlistItem'>
      <img src={image} alt="" className='wishlistItem__img' />
      <h1 className="wishlistItem__title">{title}</h1>
      <p className="wishlistItem__price">
        {price}$
      </p>
      <div className="wishlistItem__delete" onClick={onClickRemove}>
        <img src="./img/delete.png" alt="" />
      </div>
    </div>
  )
}

export default WishlistItem