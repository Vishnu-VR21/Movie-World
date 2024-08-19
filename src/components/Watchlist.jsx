import React, { useEffect, useState } from 'react'
import genres from '../utility/genre'

function Watchlist({watchlist , setWatchlist , handleRemove}) {

  const [search ,setSearch] = useState('')
  const [genrelist, setGenrelist] = useState(['All Genres'])
  const [cgenre, setCgenre] = useState('All Genres')

  let handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  let handleFilter = (genre)=>{
    setCgenre(genre)
  }

  let sortInc = ()=>{
    let increasing = watchlist.sort((movieA , movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })
    setWatchlist([...increasing])
  }

  let sortDec = ()=>{
    let decreasing = watchlist.sort((movieB , movieA)=>{
      return movieB.vote_average - movieA.vote_average
    })
    setWatchlist([...decreasing])
  }

  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return genres[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenrelist(['All Genres' , ...temp])
  }, [watchlist])

  return (
    <>

    <div className='flex justify-center flex-wrap m-4'>
      {genrelist.map((genre)=>{
        return <div onClick={()=>handleFilter(genre)} className={ cgenre==genre ? 'items-center bg-blue-300 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-3 hover:cursor-pointer' : 'items-center bg-gray-300 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-3 hover:cursor-pointer'}>{genre}</div>
      })}
      
    </div>

    <div className='flex justify-center my-4'>
      <input onChange={handleSearch} value={search} type="text" placeholder='search movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none p-4' />
    </div>

    <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
      <table className='w-full text-gray-500 text-center'>
        <thead className='border-b-2'>
          <tr>
            <th>Name</th>
            <th className='flex justify-center'>
              <div onClick={sortInc} className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
              <div className='p-2'>Ratings</div>
              <div onClick={sortDec} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
            </th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>

          {watchlist.filter((movieObj)=>{
            if(cgenre=='All Genres'){
              return true
            }else{
              return genres[movieObj.genre_ids[0]]==cgenre
            }
          }).filter((movieObj)=>{
            return movieObj.original_title.toLowerCase().includes(search.toLocaleLowerCase())
          }).map((movieObj)=>{
            return <tr className='border-b-2'>
            <td className='flex items-center px-6 py-4'>
              <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="" />
              <div className='mx-10'>{movieObj.original_title}</div>
            </td>
            <td>{movieObj.vote_average}</td>
            <td>{movieObj.popularity}</td>
            <td>{genres[movieObj.genre_ids[0]]}</td>
            <td onClick={()=>handleRemove(movieObj)} className='text-red-500 hover:cursor-pointer'>Delete</td>
          </tr>

          })}
          
          
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Watchlist
