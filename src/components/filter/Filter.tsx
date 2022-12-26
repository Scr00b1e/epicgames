import React from 'react'
import Search from '../search/Search'
import filter from './filter.json'
import './filter.scss'

type SearchProps = {
    search: string
    setSearch: any
    category: any
    setCategory: (id: number) => void
}

const Filter: React.FC<SearchProps> = ({search, setSearch, category, setCategory}) => {
    const [active, setActive] = React.useState(null)
    const onClickFilter = (index: any) => {
        if (active === index) {
            return setActive(null)
        }

        setActive(index)
    }
    console.log(category);
    

    return (
        <aside className='filter'>
            <div className="filter__words">
                <h1 className='filter__title'>Filter</h1>
            </div>
            <Search search={search} setSearch={setSearch}/>
            <ul className='filter__list'>
                {
                    filter.map((obj, i) => (
                        <li className='filter__item' key={obj.id} onClick={() => onClickFilter(i)}>
                            <div className='filter__visible'>
                                <p className="filter__text">
                                    {obj.name}
                                </p>
                                <img src="./img/more.svg" alt="" />
                            </div>
                            <ul className={active === i ? 'active' : ''}>
                                <li 
                                    key={i} 
                                    onClick={() => setCategory(i)} 
                                    className={category === i ? 'active' : ''}>

                                    {obj.genre}
                                </li>
                                <li>
                                    {obj.genre1}
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