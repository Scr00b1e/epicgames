import React from 'react'
import { useDispatch } from 'react-redux'
import { setSort, Sort as SortType, SortPropertyEnum } from '../../redux/slices/filter/sortSlice'
import './sort.scss'

type sortItem = {
  name: string
  sortType: SortPropertyEnum
}

interface SortProperty {
  value: SortType
}

export const sortList: sortItem[] = [
  {name: 'popular', sortProperty: SortPropertyEnum.RATING_DESC},
  {name: 'alhapetic', sortProperty: SortPropertyEnum.TITLE_DESC},
  {name: 'Price: Low', sortProperty: SortPropertyEnum.PRICE_ASC},
  {name: 'Price: High', sortProperty: SortPropertyEnum.PRICE_DESC},
]

const Sort: React.FC<SortProperty> = ({ value }) => {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()

  const onClickSort = (obj: sortItem) => {
    dispatch(setSort(obj))
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
            sortList.map((obj, i) => (
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