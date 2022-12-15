import React from 'react'
import './sort.scss'

const Sort: React.FC = () => {
  return (
    <select className='sort'>
      <option value="Popular" selected>Popular</option>
      <option value="Alphabet">Alphabetic</option>
      <option value="pricelow">Price: Low</option>
      <option value="pricehigh">Price: high</option>
    </select>
  )
}

export default Sort