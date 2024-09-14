import React from 'react'
import Pages from './components/Pages'
import { BrowserRouter } from 'react-router-dom'
import Map from './components/Map'

const App = () => {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  )
}

export default App
