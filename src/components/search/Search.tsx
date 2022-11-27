import React from 'react'
 import './search.scss'

const Search: React.FC = () => {
    return (
        <div className="epicgames_search">
            <input placeholder="search" type="search"/>
                <img src="./img/search.png" alt=""/>
                    <ul>
                        <li>Explore</li>
                        <li>Browse</li>
                        <li>News</li>
                    </ul>
        </div>
    )
}

export default Search