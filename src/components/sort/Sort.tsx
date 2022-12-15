import React from 'react'
import './sort.scss'

type SortType = {
  value: any
  setSort: any
}

const Sort: React.FC<SortType> = ({value, setSort}) => {
  const options = [
    {name: 'Popular'},
    {name: 'Alphabetic'},
    {name: 'Price: Low'},
    {name: 'Price: High'},
  ]

  return (
    <select className='sort'>
      {
        options.map((obj) => (
          <option>{obj.name}</option>
        ))
      }
    </select>
  )
}

export default Sort