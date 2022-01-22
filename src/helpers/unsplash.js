import { useState, useEffect } from 'react'

const clientId = process.env.REACT_APP_UNSPLASH_ACCESS_KEY

async function unsplash ({ query, page, options }) {
  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${query}&per_page=30&page=${page}${options}`
  const res = await fetch(fetchUrl)
  const json = await res.json()
  return json
}

function useUnsplash ({ query, page, options }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [pics, setPics] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setPics([])
  }, [query])

  useEffect(() => {
    setPics([])
  }, [options])

  useEffect(() => {
    setLoading(true)
    setError(false)
    async function getData () {
      const json = await unsplash({ query, page, options })
      setPics((prev) => {
        return [...prev, ...json?.results]
      })
      setHasMore(json.total_pages > page)
      setLoading(false)
    }
    getData()
  }, [query, page, options])

  return { loading, error, pics, hasMore }
}

export default useUnsplash
