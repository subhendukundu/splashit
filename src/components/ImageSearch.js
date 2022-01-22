import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback
} from 'react'

import Modal from './Modal'
import SearchAndFilter from './SearchAndFilter'
import { Context } from '../store'
import useUnsplash from '../helpers/unsplash'

export default function ImageSearch () {
  const searchInputRef = useRef()
  const infiniteLoader = useRef(null)
  const [query, setQuery] = useState('star-wars')
  const [page, setPage] = useState(1)
  const [modalData, setModalData] = useState(null)
  const [state] = useContext(Context)
  const { filters } = state
  const filterOptions = Object.keys(filters).reduce((acc, item) => {
    return `${acc}${
      filters[item] === 'any' ? '' : `&${item}=${filters[item]}`
    }`
  }, '')
  const { pics, loading, error } = useUnsplash({
    query,
    page,
    options: filterOptions ? `&${filterOptions}` : ''
  })

  console.log('imageData', loading, pics, page, filterOptions)

  function openModal (pic) {
    setModalData(pic)
  }

  function onSearchImages (e) {
    e.preventDefault()
    const { value } = searchInputRef.current
    console.log(value)
    if (value && value !== query) {
      setQuery(value)
    }
  }

  const handleObserver = useCallback((entries) => {
    const target = entries[0]
    if (target.isIntersecting) {
      console.log('load more')
      setPage((page) => page + 1)
    }
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (infiniteLoader.current) observer.observe(infiniteLoader.current)
  }, [handleObserver])

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
    <>
      {modalData && <Modal setModalData={setModalData} modalData={modalData} />}
      <SearchAndFilter ref={searchInputRef} onSearchImages={onSearchImages} />
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
        <div ref={infiniteLoader} />
      </ul>
    </>
  )
}
