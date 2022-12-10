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
        <ul className='filter__list'>
            <br/>
            <hr/>
            <li className='filter__item'>
                <div className='filter__visible'>
                    <p className="filter__text">
                        Genre
                    </p>
                    <img src="./img/more.svg" alt="" />
                </div>
                <ul className='active'>
                    <li>
                        test
                    </li>
                </ul>
            </li>
            <hr/>
            <br/>
            <hr/>
            <li className='filter__item'>
                <div className='filter__visible'>
                    <p className="filter__text">
                        price
                    </p>
                    <img src="./img/more.svg" alt="" />
                </div>
                <ul>
                    <li>
                        test
                    </li>
                </ul>
            </li>
            <hr/>
            <br/>
            <hr/>
            <li className='filter__item'>
                <div className='filter__visible'>
                    <p className="filter__text">
                        platform
                    </p>
                    <img src="./img/more.svg" alt="" />
                </div>
                <ul>
                    <li>
                        test
                    </li>
                </ul>
            </li>
            <hr/>
        </ul>
        
    </aside>
  )
}

export default Filter