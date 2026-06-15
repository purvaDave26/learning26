import React, { useMemo, useState } from 'react'

export const UseMemodemo1 = () => {
    const [count, setcount] = useState(0);
    const [count2, setcount2] = useState(100);
   // const randomnum=Math.floor(Math.random()*1000);

    const randomnum=useMemo(()=>
    {
         return Math.floor(Math.random()*1000)
    },[count2]);
     //()=>{} :- function
    //[] :- depedancy array :
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseMemodemo1</h1>
        <h1>count={count}</h1>
        <h1>count2={count2}</h1>
        <button onClick={()=>{setcount(count+1)}}>+</button>
        <button onClick={()=>{setcount2(count2+1)}}>++</button>
        <h1>Random no={randomnum}</h1>
    </div>
  )
}
