import React, { useContext } from 'react'
import { House1Room1 } from './House1Room1'
import { WaterContext } from './WaterContext'

export const House1 = () => {
   const {flow}=useContext(WaterContext)
  return (
    <div style={{textAlign:"center"}}>
        <h1>House1-{flow}</h1>
        
        <House1Room1></House1Room1>

    </div>
  )
}
