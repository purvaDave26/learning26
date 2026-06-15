import React from 'react'
import { Link } from 'react-router-dom'

export const Sports = () => {

    const sport=[
        {id:1,name:"cricket"},
        {id:2,name:"swmming"},
        {id:3,name:"Badminton"},
        {id:4,name:"table tennis"},
        {id:5,name:"Cycling"}
    ]
  return (
    <div style={{textAlign:"center"}}>
       {
        sport.map((sp)=>{
            return <li>
                <Link to={`/sportsdetails/${sp.id}`}>{sp.name}</Link>
            </li>
        })
       }
    </div>
  )
}
