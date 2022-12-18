import React from 'react'
import './search.scss'

const Search: React.FC = () => {
    const [value, setValue] = React.useState('')
    const searchRef = React.useRef(null)

    const onChangeSearch = (event: { target: { value: React.SetStateAction<string> } }) => {
        setValue(event.target.value)
    }

    return (
        <div className="search">
            <img src="./img/search.png" alt="" />
            <input placeholder="search" type="search" ref={searchRef} onChange={onChangeSearch} />
        </div>
    )
}

export default Search