import React from 'react'
import './sort.scss'

type SortType = {
  value: any
  onChangeSort: any
}

const Sort: React.FC<SortType> = ({ value, onChangeSort }) => {
  const [open, setOpen] = React.useState(false)
  const options = [
    { name: 'Popular', sortType: 'rating' },
    { name: 'Alphabetic', sortType: 'title' },
    { name: 'Price: Low', sortType: '-price' },
    { name: 'Price: High', sortType: 'price' },
  ]

  const onClickSort = (i: number) => {
    onChangeSort(i)
    setOpen(false)
  }

  return (
    <div className='sort'>
      <div className="sort__words" onClick={() => setOpen(!open)}>
        <b className='sort__by'>Sort by:</b>
        <p className='sort__text'>{value.name}</p>
      </div>
      {open &&
        <div className='sort__popup'>
          {
            options.map((obj, i) => (
              <div
                className='sort__item'
                key={i}
                onClick={() => onClickSort(obj)}>{obj.name}</div>
            ))
          }
        </div>}
    </div>
  )
}

export default Sort