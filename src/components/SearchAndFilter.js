import React, { forwardRef, useState } from 'react'
import Sort from './Sort/index'
import sortData from '../config/sortData'
import { ReactComponent as SearchIcon } from '../assets/search.svg'
import { ReactComponent as FilterIcon } from '../assets/filter.svg'

const SearchAndFilter = forwardRef(({ onSearchImages }, ref) => {
  const [showFilter, setShowFilter] = useState(false)

  function showHideFilter () {
    console.log(showFilter)
    setShowFilter(!showFilter)
  }

  return (
    <>
      <div className="search-filter-container">
        <form className="search-filter-form" onSubmit={onSearchImages}>
          <div className="search-input-wrapper">
            <label htmlFor="query">
              <SearchIcon />
            </label>
            <input
              type="text"
              name="query"
              className="search-input"
              placeholder="Try 'stars' or 'baby'"
              ref={ref}
            />
          </div>
          <button type="submit" className="search-submit-button">
            Search
          </button>
        </form>
        <button type="submit" className="search-filter-button" onClick={showHideFilter}>
          Filter
        </button>
        <button className="search-filter-icon-button" onClick={showHideFilter}>
          <FilterIcon />
        </button>
      </div>
      {showFilter && <Sort options={sortData} />}
    </>
  )
})

export default SearchAndFilter
