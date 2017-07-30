import React from 'react'
import './filter-bar.css'

class FilterOptions extends React.Component {
  render() {
    return (
      <div className='filter-wrap'>
        <ul className='filter-style'>
          <li className='filter-header'>Filter by</li>
          <li className='filter-op'>
            <a className='btn' href='#'>All</a>
          </li>
          <li className='filter-op'>
            <a className='btn' href='#'>Buy</a>
          </li>
          <li className='filter-op'>
            <a className='btn' href='#'>Rent</a>
          </li>
          <li className='filter-op'>
            <a className='btn' href='#'>New Homes</a>
          </li>
          <li className='filter-op'>
            <a className='btn' href='#'>Share</a>
          </li>
          <li className='filter-op'>
            <a className='btn' href='#'>Sold</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default FilterOptions
