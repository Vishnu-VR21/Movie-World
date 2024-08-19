import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import Watchlist from './components/Watchlist'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  let [watchlist, setWatchlist] = useState([])

  let handleAdd = (movieObj)=>{
    let newWatchlist = [...watchlist , movieObj]
    localStorage.setItem('moviesApp' , JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist)
  }

  let handleRemove = (movieObj)=>{
    let filterMovielist = watchlist.filter((movie)=>{
      return movie.id != movieObj.id
    })
    localStorage.setItem('moviesApp' , JSON.stringify(filterMovielist))
    setWatchlist(filterMovielist)
  }

  useEffect(()=>{
    let moviesLocal = localStorage.getItem('moviesApp')
    if(!moviesLocal){
      return
    }
    setWatchlist(JSON.parse(moviesLocal))
  }, [] )


  return (
    <>
    <BrowserRouter>
    
      <Navbar/>

      <Routes>
        <Route path='/' element={<> <Banner /> <Movies watchlist={watchlist} handleAdd={handleAdd} handleRemove={handleRemove}/> </>} />
        <Route path='/watchlist' element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} handleRemove={handleRemove}/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
