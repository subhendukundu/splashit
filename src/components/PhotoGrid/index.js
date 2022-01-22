import React from 'react'
import './index.css'

export default function PhotoGrid ({ loading, error, openModal, pics }) {
  const photosGrid = pics.map((pic) => (
    <li className="card" key={pic.id}>
      <button onClick={() => openModal(pic)}>
        <img
          className="card-image"
          alt={pic.alt_description}
          src={pic.urls.thumb}
          width="50%"
          height="50%"
        />
      </button>
    </li>
  ))
  return (
    <ul className="photo-grid">
      {pics.length > 0
        ? (
            photosGrid
          )
        : loading
          ? (
        <p>Loading...</p>
            )
          : (
        <span>No results found!</span>
            )}
      {error && <p>Error!</p>}
    </ul>
  )
}
