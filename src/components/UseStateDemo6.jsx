import React, { useState } from 'react'

export const UseStateDemo6 = () => {

    const [data,setdata]=useState([{id:1,team:"RCB"},{id:2,team:"CSK"},{id:3,team:"GT"}])
    const change=()=>
    {
        setdata[{id:101,team:"kkr"},{id:2,team:"MI"},{id:3,team:"RR"}]
    }
  return (
    <div style={{textAlign:"center"}}>
        
        <h1>UseStateDemo6</h1>
        {
        data.map((sd)=>
        {
            return(
                <h2>id:{sd.id},team:{sd.team}</h2>
                
            )
        }
            )
        }
        <button onClick={()=>change()}>click</button>
    </div>
  )
}
