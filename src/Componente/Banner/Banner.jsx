import React,{useState,useEffect} from 'react'
import './Banner.css'
import Request from '../../API/request'
import axios from '../../API/axios'

const Banner = () => {

const [movie, setmovie] = useState([])

useEffect(() => {
    const fetchData = async()=>{
        const request =await axios.get(Request.fetchNetflixOriginals)
        setmovie(
            request.data.results[
                Math.floor(Math.random()+request.data.results.length-1)
            ]
        )
    }
    fetchData();
}, [])

const trancate = (string,n)=>{
    return string?.length > n ? string.substr(0,n-1)+'...':string;
}

  return (
    <header className="banner" style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize:'cover',
        backgroundPosition:'center center'
    }}>
        <div className="banner-contents">
            <h1 className='banner-title'>
                {movie.title || movie?.name ||movie?.original_name}
            </h1>
            <div className="banner-btns">
                <button className="btn-play banner-btn">Play</button>
                <button className="btn-mylis banner-btn">My list</button>
            </div>
            <p className="banner-description">
                {trancate(movie?.overview,150)}
            </p>
        </div>
    </header>
  )
}

export default Banner
