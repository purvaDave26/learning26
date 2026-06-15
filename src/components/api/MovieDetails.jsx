import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
    const Id=useParams().imdbID;
    const moviedeatils=async()=>
    {
        const res=await axios.get(`http://www.omdbapi.com/?apikey=3df9f68b&i=${Id}`)
        console.log("id",res.data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>MovieDetails</h1>
        <button onClick={moviedeatils}>details</button>
    </div>
  )
}
