import React from 'react'

const WishlistItem: React.FC = () => {
  return (
    <div className='wishlistItem'>
        <img src="./img/gracon.png" alt="" className='wishlistItem__img'/>
        <h1 className="wishlistItem__title">Red dead redemption 2</h1>
        <p className="wishlistItem__price">
            34$
        </p>
        <div className="wishlistItem__delete">
            <img src="./img/delete.png" alt=""/>
        </div>
    </div>
  )
}

export default WishlistItem