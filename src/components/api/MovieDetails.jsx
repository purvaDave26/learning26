import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
    const Id=useParams().imdbID;
    const [display, setdisplay] = useState("")
    const [True, setTrue] = useState(false);
    const moviedeatils=async()=>
    {
        const res=await axios.get(`http://www.omdbapi.com/?apikey=3df9f68b&i=${Id}`)
        console.log("id",res.data)
        setdisplay(res.data)
        setTrue(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>MovieDetails</h1>
         <button onClick={moviedeatils}>details</button>
        {
          True==true && 
          <div><h1>Title:{display.tittle}</h1>
             <h1>Actor:{display.Actors}</h1>
             </div>
        }
       
    </div>
  )
}
