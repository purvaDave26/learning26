import React, { useContext } from 'react'
import { WaterContext } from './WaterContext'

export const House1Room1 = () => {
    const {flow,data}=useContext(WaterContext)
  return (
    <div style={{textAlign:"center"}}>
        <h1>House 1 Room 1</h1>
        <h4>Socity={data.socity}</h4>
    </div>
  )
}
