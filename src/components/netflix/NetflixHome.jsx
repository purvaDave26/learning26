import React from 'react'
import { MyButton } from '../MyButton'
import { Link } from 'react-router-dom'

export const NetflixHome = () => {
  const homeTest=(x)=>
  {
    alert("Home Test "+x)
  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Netflix Home</h1>
        <MyButton funName={()=>{homeTest(100)}} name="home button"></MyButton>
       <Link to="/Common" state={{"from":"/NetflixHome"}}>Common</Link>        
    </div>
  )
}
