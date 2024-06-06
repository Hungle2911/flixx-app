import { useState } from 'react'
import HomeRoute from './routes/HomeRoute'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import MovieDetailPage from './routes/MovieDetailPage'

function App() {

  return (
      <Routes>
        <Route path='/' element={<HomeRoute />} />
        <Route path='/movie-details' element={<MovieDetailPage />}/>
      </ Routes>
  )
}

export default App
