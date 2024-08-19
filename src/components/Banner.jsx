import React from 'react'

function Banner({ movieObj, poster_path }) {
  if (!movieObj) {
    return null;
  }

  return (
    <div className='h-[20vh] md:h-[85vh] bg-cover bg-center flex items-end' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
      <div className='text-white text-2xl bg-gray-900/60 w-full text-center p-5'>
        {movieObj.original_title}
      </div>
    </div>
  )
}

export default Banner
