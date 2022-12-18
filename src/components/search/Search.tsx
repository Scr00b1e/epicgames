import React from 'react'
import './search.scss'

const Search: React.FC = () => {
    const [value, setValue] = React.useState('')
    const searchRef = React.useRef(null)

    return (
        <div className="search">
            <img src="./img/search.png" alt="" />
            <input placeholder="search" type="search" ref={searchRef}/>
        </div>
    )
}

export default Search