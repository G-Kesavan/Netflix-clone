import axios from '../../API/axios'
import React, { useEffect,useState } from 'react'
import './Row.css'


const Row = ({title,fetchURL,isLarge}) => {

const baseURL = "https://image.tmdb.org/t/p/original";
const [movie, setMovie] = useState([])

useEffect(() => {
    const fetchData =async()=>{
        const request= await axios.get(fetchURL);
        setMovie(request.data.results);
        return request;
    }
    fetchData()   
}, [fetchURL])

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row-posters">
            {movie.map((movie)=>(
              (isLarge && movie.poster_path)||
              (!isLarge && movie.backdrop_path)
            )&&
              (<img 
                  key={movie.id} 
                  className={`row-poster ${isLarge && 'row-posterLarge'}`}
                  src={`${baseURL}${isLarge ? movie.poster_path:movie.backdrop_path}`}
                  alt='photo'
              />)
            )}
        </div>
    </div>
  )
}

export default Row