import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {

    const id = useParams().id
  return (
    <div style={{textAlign:"center"}}>
        <h2>{id}</h2>
    </div>
  )
}
