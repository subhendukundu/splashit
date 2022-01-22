import React from 'react'
import Home from './pages/Home'
import './App.css'
import Store from './store'

function App () {
  return (
    <Store>
      <Home />
    </Store>
  )
}

export default App
