import React from 'react'

function Pagination({handlePrev, handleNext, pageno}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
        <div onClick={handlePrev} className='px-8 hover:cursor-pointer'><i class="fa-solid fa-angles-left"></i></div>
        <div className='font-bold'>{pageno}</div>
        <div onClick={handleNext} className='px-8 hover:cursor-pointer'><i class="fa-solid fa-angles-right"></i></div>
    </div>
  )
}

export default Pagination
