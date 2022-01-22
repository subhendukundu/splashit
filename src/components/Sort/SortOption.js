import React, { useContext } from 'react'
import { Context } from '../../store'

export default function SortOption ({ label, name, value, setter }) {
  const [state] = useContext(Context)
  console.log(state)
  return (
    <label className="sort-option-label">
      <input
        type="radio"
        name={name}
        onChange={() => setter(name, value)}
        checked={state?.filters[name] === value}
      />
      <span>{label}</span>
    </label>
  )
}
