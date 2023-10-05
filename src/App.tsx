import React, { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {FavouritesPage} from './pages/FavouritesPage'
import {Navigation} from './components/Navigation'

function App() {
  useEffect(() => {
    document.title = `Anton C. - Github search`;
}, []);
  return (
    <>
      <title>
        Github search
      </title>
      <Navigation />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/favourites" element={ <FavouritesPage /> } />
      </Routes>
    </>
  )
}

export default App
