import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const OmdbSearch = () => {
    const [movieList, setmovieList] = useState([]);
    const [movieName, setmovieName] = useState("");

    const searchMovie=async()=>
    {
        const res=await axios.get(`http://www.omdbapi.com/?apikey=3df9f68b&s=${movieName}`)
        console.log(res.data);
        setmovieList(res.data.Search)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>OmdbSearch</h1>
        <input type='text' onChange={(e)=>setmovieName(e.target.value)}></input>
        <button onClick={searchMovie}>Search Movie</button>
        <div className='row'>
            {
                movieList?.map((movie)=>
                {
                    return(
                         <div className="col-md-4 mb-3">
                         <div className="card h-100">
                             <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <h5 className="card-title">{movie.Year}</h5>
                <Link to={`/moviedeatils/${movie.imdbID}`}>Details</Link>
                </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
