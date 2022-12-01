import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

// https://store.epicgames.com/

const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className="header_left">
                <Link to={'/'}>
                    <img src="./img/icon.png" alt="" className='header__img'/>
                </Link>
                <ul>
                    <li>Store</li>
                    <a href='https://store.epicgames.com/'>
                        <li>FAQ</li>
                    </a>
                </ul>
            </div>
            <a href="https://store.epicgames.com/">
                <div className="header_right">
                    <img src="./img/Union.png" alt="" />
                    <div className='header__login'>
                        <img src="./img/Vector.png" alt="" />
                        <p>Log in</p>
                    </div>
                    <button>Get client</button>
                </div>
            </a>
        </div>
    )
}

export default Header