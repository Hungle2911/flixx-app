import React, { useState, usePar, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import BackToHomepageBtn from './BackToHomepageBtn'
import API from '../api/axios.config'
import Loading from './Loading';
const MovieDetails = () => {
  const [movieDetailsData, setMovieDetailsData] = useState()
  const [loading, setLoading] = useState(true); // Added loading state
  const {movieId} = useParams()
  const getMovieDetails = async () => {
    try {
      const response = await API.get(`movie/${movieId}`)
      console.log(response.data);
      const data = await response.data
      setMovieDetailsData(data)
      setLoading(false);
    } catch (error) {
      console.error(error)
      setLoading(false);
    }
  }
  useEffect(() => {
    getMovieDetails()
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <section className="container">
      <BackToHomepageBtn />
    <div id="movie-details">
  <div className="details-top">
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetailsData.poster_path}`}
        className="card-img-top"
        alt="Movie Title"
      />
    </div>
    <div>
      <h2>{movieDetailsData.title}</h2>
      <p>
        <i className="fas fa-star text-primary" />{movieDetailsData.vote_average} / 10 : ({movieDetailsData.vote_count} reviewers) 
      </p>
      <p className="text-muted">Release Date: {movieDetailsData.release_date}</p>
      <p>
        {movieDetailsData.overview}
      </p>
      <h5>Genres</h5>
            <ul className="list-group">
              {movieDetailsData.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
      </ul>
      <a href={movieDetailsData.homepage} target="_blank" className="btn">
        Visit Movie Homepage
      </a>
    </div>
  </div>
  <div className="details-bottom">
    <h2>Movie Info</h2>
    <ul>
      <li>
        <span className="text-secondary">Budget:</span> ${movieDetailsData.budget}
      </li>
      <li>
        <span className="text-secondary">Revenue:</span> ${movieDetailsData.revenue}
      </li>
      <li>
        <span className="text-secondary">Runtime:</span> {movieDetailsData.runtime} minutes
      </li>
      <li>
        <span className="text-secondary">Status:</span> {movieDetailsData.status}
      </li>
    </ul>
    <h4>Production Companies</h4>
          <div className="list-group">
            {movieDetailsData.production_companies.map(data => (
              <span key={data.id}>/ {data.name}  </span>))}
          </div>
  </div>
</div>
</section>
  )
}

export default MovieDetails