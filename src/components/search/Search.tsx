import React from 'react'
import './search.scss'

type SearchType = {
    search: string
    setSearch: any
}

const Search: React.FC<SearchType> = ({search, setSearch}) => {
    
    const searchRef = React.useRef(null)

    const onChangeSearch = (event: { target: { value: React.SetStateAction<string> } }) => {
        setSearch(event.target.value)
    }

    return (
        <div className="search">
            <img src="./img/search.png" alt="" />
            <input 
                value={search}
                placeholder="search" 
                type="search" 
                ref={searchRef} 
                onChange={onChangeSearch} />
        </div>
    )
}

export default Search