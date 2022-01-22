import React, { useContext } from 'react'
import { Context } from '../../store'
import SortGroup from './SortGroup'

import './index.css'

export default function Sort ({ label, options = [] }) {
  const [state, dispatch] = useContext(Context)

  function setOptionSelected (name, value) {
    dispatch({
      type: 'CHANGE_FILTERS',
      payload: {
        ...state.filters,
        [name]: value
      }
    })
  }

  function onClearFilters () {
    dispatch({
      type: 'CHANGE_FILTERS',
      payload: {}
    })
  }

  return (
    <div className="sort-form">
      {options.map((item) => (
        <div className="group-option-wrapper" key={item.id}>
          <label className="group-label">{item.label}</label>
          <SortGroup
            key={item.id}
            label={label}
            setter={setOptionSelected}
            options={item.options}
          />
        </div>
      ))}
      <div className="group-option-wrapper clear-button-wrapper">
        <button className="clear-button" onClick={onClearFilters}>
          CLEAR FILTERS
        </button>
      </div>
    </div>
  )
}
