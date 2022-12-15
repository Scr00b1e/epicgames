import React from 'react'
import './filter.scss'

const Filter: React.FC = () => {
    const [active, setActive] = React.useState(null)
    const onClickFilter = (index: any) => {
        if (active === index) {
            return setActive(null)
        }

        setActive(index)
    }

    const filter = [
        {
            name: 'Genre',
            id: 0
        },
        {
            name: 'Types',
            id: 1
        },
        {
            name: 'Features',
            id: 2
        }
    ]

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
                {
                    filter.map((obj, index) => (
                        <li className='filter__item' key={obj.id} onClick={() => onClickFilter(index)}>
                            <div className='filter__visible'>
                                <p className="filter__text">
                                    {obj.name}
                                </p>
                                <img src="./img/more.svg" alt="" />
                            </div>
                            <ul className={active === index ? 'active' : ''}>
                                <li>
                                    test
                                </li>
                            </ul>
                        </li>
                    ))
                }

            </ul>

        </aside>
    )
}

export default Filter