import React from 'react'
import { Link } from 'react-router-dom'

export const Teams = () => {
    const Teams=[
        { id: 1, name: "RCB" },
  { id: 2, name: "CSK" },
  { id: 3, name: "MI" },
  { id: 4, name: "KKR" },
  { id: 5, name: "DC" },
  { id: 6, name: "SRH" },
  { id: 7, name: "RR" },
  { id: 8, name: "PBKS" },
  { id: 9, name: "GT" },
  { id: 10, name: "LSG" }
    ]
  return (
    <div style={{textAlign:"center"}}>
        {
          Teams.map((team)=>{
            return <li>
                    <Link to={`/teamDetails/${team.id}`}>{team.name}</Link>
                </li>
            
        } ) 
    }</div>
  )
}
