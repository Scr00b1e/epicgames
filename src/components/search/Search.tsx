import React from 'react'
import './search.scss'

const Search: React.FC = () => {
  return (
    <div className="search">
        <img src="./img/search.png" alt="" />
        <input placeholder="search" type="search" />
    </div>
  )
}

export default Search