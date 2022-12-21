import React from 'react'
import { Link } from 'react-router-dom'
import WishlistItem from '../../components/wishlistItem/WishlistItem'
import './wishlist.scss'

const Wishlist: React.FC = () => {
  return (
    <div className='container'>
      <div className="wishlist">
        <div className="wishlist__word">
          <h1>Wishlisht</h1>
          <h1>Reset</h1>
        </div>
        <div className="wishlist__content">
          <WishlistItem/>
        </div>
        <Link to={'/'}><button>Back</button></Link>
      </div>
    </div>
  )
}

export default Wishlist