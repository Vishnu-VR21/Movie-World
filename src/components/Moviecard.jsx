import React from 'react'

function Moviecard({ movieObj , poster_path , name , handleAdd , handleRemove , watchlist}) {
    function doesContain(movieObj){
        for(let i =0; i<watchlist.length; i++){
            if(watchlist[i].id == movieObj.id){
                return true
            }      
        }
        return false
    }

  return (
    <div className='h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
        
        {doesContain(movieObj) ? 
        (<div onClick={() =>(handleRemove(movieObj))} className='m-4 flex justify-end items-center text-red-700'>
            <i class="fa-solid fa-heart-circle-check"></i>
        </div>) 
        
        : 

        (<div onClick={() =>(handleAdd(movieObj))} className='m-4 flex justify-end items-center text-white'>
            <i class="fa-solid fa-heart"></i>
        </div>
        )}

        <div className='text-white text-xl w-full text-center p-2 bg-gray-900/60 rounded-xl'>
            {name}
        </div>

    </div>
  )
}

export default Moviecard
