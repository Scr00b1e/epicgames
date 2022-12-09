import React from 'react'
import { Link } from 'react-router-dom'
import './search.scss'

const Search: React.FC = () => {
    return (
        <div className="container">
            <div className="navigate">
                <div className="navigate__search">
                    <img src="./img/search.png" alt="" />
                    <input placeholder="search" type="search" />
                </div>
                <ul>
                    <Link to={'/'}>
                        <li className='active'>Explore</li>
                    </Link>
                    <Link to={'/catalog'}>
                        <li>Browse</li>
                    </Link>
                    <li>News</li>
                </ul>
            </div>
        </div>
    )
}

export default Search