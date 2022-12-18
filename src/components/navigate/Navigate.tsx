import React from 'react'
import { Link } from 'react-router-dom'
import './navigate.scss'

export const navigating = [{
        id: 0,
        title: 'Explore',
        link: '/'
    }, 
    {
        id: 1,
        title: 'Browse',
        link: '/catalog'
    }, 
    {
        id: 2,
        title: 'News',
        link: '/'
    }]

const Search: React.FC = () => {
    const [active, setActive] = React.useState(0)

    return (
        <div className="container">
            <div className="navigate">
                <div className="navigate__search">
                    <img src="./img/search.png" alt="" />
                    <input placeholder="search" type="search" />
                </div>
                <ul>
                    {
                        navigating.map((obj) => (
                            <Link key={obj.id} to={obj.link}>
                                <li className={active === obj.id ? 'active' : ''} onClick={() => setActive(obj.id)}>{obj.title}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Search