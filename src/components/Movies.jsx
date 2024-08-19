import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'
import axios from 'axios'
import Pagination from './Pagination'
import Banner from './Banner'

function Movies({handleAdd, handleRemove, watchlist}) {
  const [movies, setMovies] = useState([])
  const [pageno, setPageno] = useState(1)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const handlePrev = () => {
    if (pageno === 1) {
      setPageno(pageno)
    } else {
      setPageno(pageno - 1)
    }
  }

  const handleNext = () => {
    setPageno(pageno + 1)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=90c91a7114624630423095eb4c9e0f11&language=en-US&page=${pageno}`)
      .then(function (res) {
        setMovies(res.data.results)
        setSelectedMovie(res.data.results[0])
      })
  }, [pageno])

  return (
    <div>
      {selectedMovie && (
        <Banner 
          movieObj={selectedMovie} 
          poster_path={selectedMovie.poster_path} 
        />
      )}
      <div className='text-2xl font-bold text-center p-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>
        Trending Movies
      </div>
      <div className='flex flew-row flex-wrap justify-around gap-10'>
        {movies.map((movieObj) => {
          return <Moviecard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAdd={handleAdd} handleRemove={handleRemove} watchlist={watchlist} />
        })}
      </div>

      <Pagination pageno={pageno} handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  )
}

export default Movies
