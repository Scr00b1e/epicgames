import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'


const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className="header_left">
                <Link to={'/'}>
                    <img src="./img/icon.png" alt="" className='header__img' />
                </Link>
                <ul>
                    <li>Store</li>
                    <a href='https://store.epicgames.com/'>
                        <li>FAQ</li>
                    </a>
                </ul>
            </div>
            <div className="header_right">
                <Link to={'/wishlist'}>
                    <h1 className='header__title'>Wishlist</h1>
                </Link>
            </div>
        </div>
    )
}

export default Header