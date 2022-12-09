import React from 'react'
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
                    <li className='active'>Explore</li>
                    <li>Browse</li>
                    <li>News</li>
                </ul>
            </div>
        </div>
    )
}

export default Search