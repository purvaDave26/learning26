import React from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from '../MyButton'

export const NetflixShows = () => {
  const showTest=()=>
  {
      alert("show test")
  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixShows</h1>
        <MyButton funName={showTest} bgcolor="gray" ></MyButton>
        <br></br>
        <Link to="/common" state={{"from":"/netflixshows"}}>common</Link>
        <li>
          <Link to="/Watch/friends">Friends</Link></li>
        <li>
          <Link to="/Watch/moneyheist">Money Heist </Link></li>
        <li>
          <Link to="/Watch/strangerthings">Stranger Things </Link></li>
        <li>
          <Link to="/Watch/breakingbad">Breaking Bad </Link></li>
    </div>
  )
}
