import React, { useState } from 'react'

export const UseStateDemo3 = () => {
    const [isLoding,setIsLoding]=useState(true)

    const stoploder=()=>{
        setIsLoding(false)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo3</h1>

        {
            isLoding==true && <h1>loading....</h1>
        }
        <button onClick={stoploder}>STOP</button>
    </div>
  )
}
