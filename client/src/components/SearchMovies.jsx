import React from 'react'

const SearchMovies = () => {
  return (
    <section className="search">
  <div className="container">
    <div id="alert" />
    <form action="/search.html" className="search-form">
      <div className="search-radio">
        <input
          type="radio"
          id="movie"
          name="type"
          defaultValue="movie"
          defaultChecked=""
        />
        <label htmlFor="movies">Movies</label>
        <input type="radio" id="tv" name="type" defaultValue="tv" />
        <label htmlFor="shows">TV Shows</label>
      </div>
      <div className="search-flex">
        <input
          type="text"
          name="search-term"
          id="search-term"
          placeholder="Enter search term"
        />
        <button className="btn" type="submit">
          <i className="fas fa-search" />
        </button>
      </div>
    </form>
  </div>
</section>

  )
}

export default SearchMovies