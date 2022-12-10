import React from 'react'
import './filter.scss'

const Filter: React.FC = () => {
  return (
    <aside className='filter'>
        <div className="filter__words">
            <h1 className='filter__title'>Filter</h1>
            <h1 className='filter__title'>Reset</h1>
        </div>
        <div className="filter__search">
                <img src="./img/search.png" alt="" />
                <input placeholder="search" type="search" />
        </div>
        <ul>
            <br/>
            <hr/>
            <li>
                Genre
            </li>
            <br/>
            <hr/>
            <br/>
            <hr/>
            <li>
                Price
            </li>
            <br/>
            <hr/>
            <br/>
            <hr/>
            <li>
                Platform
            </li>
            <br/>
            <hr/>
        </ul>
        
    </aside>
  )
}

export default Filter