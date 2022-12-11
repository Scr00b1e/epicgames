import React from 'react'
import './filter.scss'

const Filter: React.FC = () => {
    const [active, setActive] = React.useState(0)
    const onClickFilter = (index: number) => {
        setActive(index)
    }

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
            <li className='filter__item' onClick={() => onClickFilter(0)} >
                <div className='filter__visible'>
                    <p className="filter__text">
                        Genre
                    </p>
                    <img src="./img/more.svg" alt="" />
                </div>
                <ul className={active === 0 ? 'active' : ''}>
                    <li>
                        test
                    </li>
                </ul>
            </li>
            <hr/>
            <br/>
            <hr/>
            <li className='filter__item' onClick={() => onClickFilter(1)}>
                <div className='filter__visible'>
                    <p className="filter__text">
                        price
                    </p>
                    <img src="./img/more.svg" alt="" />
                </div>
                <ul className={active === 1 ? 'active' : ''}>
                    <li>
                        test
                    </li>
                </ul>
            </li>
            <hr/>
            <br/>
            <hr/>
            <li className='filter__item' onClick={() => onClickFilter(2)}>
                <div className='filter__visible'>
                    <p className="filter__text">
                        platform
                    </p>
                    <img src="./img/more.svg" alt="" />
                </div>
                <ul className={active === 2 ? 'active' : ''}>
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