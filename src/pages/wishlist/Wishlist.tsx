import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import WishlistItem from '../../components/wishlistItem/WishlistItem'
import { clearItem } from '../../redux/slices/wishSlice/wishSlice'
import { RootState } from '../../redux/store'
import './wishlist.scss'

const Wishlist: React.FC = () => {
  const items = useSelector((state: RootState) => state.wishSlice.subjects)
  const dispatch = useDispatch()
  const onClickReset = () => {
    dispatch(clearItem)
  }

  return (
    <div className='container'>
      <div className="wishlist">
        <div className="wishlist__word">
          <h1>Wishlisht</h1>
          <h1 onClick={onClickReset} className="wishlist__title">Reset</h1>
        </div>
        <div className="wishlist__content">
          {
            items.map((obj) => (
              <WishlistItem key={obj.id} {...obj} />
            ))
          }
        </div>
        <Link to={'/'}><button className='wishlist__btn'>Back</button></Link>
      </div>
    </div>
  )
}

export default Wishlist