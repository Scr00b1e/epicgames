import React from 'react'
import { Link } from 'react-router-dom'
import navigating from './navigate.json'
import './navigate.scss'

const Search: React.FC = () => {
    const [active, setActive] = React.useState(0)

    return (
        <div className="container">
            <div className="navigate">
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