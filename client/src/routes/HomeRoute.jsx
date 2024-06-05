import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OnGoingSection from '../components/OnGoingSection'
import SearchMovies from '../components/SearchMovies'
import PopularMovies from '../components/PopularMovies'

const HomeRoute = () => {
  return (
    <>
    <Header />
    <OnGoingSection />
    <SearchMovies />
    <PopularMovies />
    <Footer />
    </>
  )
}

export default HomeRoute