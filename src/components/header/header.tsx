import React from 'react'
import './header.scss'

const Header: React.FC = () => {
    return (
    <div className='header'>
        <div className="header_left">
        <img src="./img/icon.png" alt=""/>
        <ul>
            <li>Mall</li>
            <li>Problem</li>
            <li>Help</li>
            <li>Unreal Engine</li>
        </ul>
        </div>
        <div className="header_right">
            <img src="./img/Union.png" alt=""/>
            <img src="./img/Vector.png" alt=""/>
            <p>Log in</p>
            <button>Get client</button>
        </div>
    </div>
    )
}

export default Header