import React from 'react'
import "../assets/css/loader.css"

export const Loader = () => {
  return (
    <div style={{textAlign:"center"}}>
       <div class="loader">
  <div class="cup">
    <div class="cup-handle"></div>
    <div class="smoke one"></div>
    <div class="smoke two"></div>
    <div class="smoke three"></div>
  </div>
  <div class="load">..........................</div>
</div>
    </div>
  )
}
