import React, { useEffect, useState } from 'react'
import API from '../api/axios.config'
const PopularMovies = () => {
  const [moviesData, setMoviesData] = useState([])
  const displayPopularMovies = async () => { 
    try {
      const {data} = await API.get('movie/popular')
      setMoviesData(data.results);
      console.log(data.results[0]);
    } catch (error) {
      console.error(error)
    }
   }
   useEffect(() => {
    displayPopularMovies()
   }, [])
  return (
    <section className="container">
  <h2>Popular Movies</h2>
  <div id="popular-movies" className="grid">
  {moviesData.map(data => (
    <div className="card" key={data.id}>
    <a href="movie-details.html?id=1">
      {data.poster_path ? <img
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        className="card-img-top"
        alt={data.title}
      /> : <img
      src='../assets/no-image.jpg'
      className="card-img-top"
      alt={data.title}
    />}
    </a>
    <div className="card-body">
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text">
        <small className="text-muted">Release: {data.release_date
}</small>
      </p>
    </div>
  </div>
  ))}
    </div>
</section>

  )
}

export default PopularMovies