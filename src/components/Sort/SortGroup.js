import React from 'react'
import SortOption from './SortOption'

export default function SortGroup ({
  state,
  setter,
  options = []
}) {
  return (
    <div className={`sort-group ${options.length > 2 ? 'more' : ''}`}>
      {options.map((item) => (
        <>
          <SortOption
            key={item.id}
            label={item.label}
            value={item.value}
            setter={setter}
            name={item.name}
            state={state}
          />
        </>
      ))}
    </div>
  )
}
