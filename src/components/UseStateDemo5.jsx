import React, { useState } from 'react'

export const UseStateDemo5 = () => {
    const [user,setuser]=useState({id:1,name:"Asus"})

    const changeUSer=()=>
    {
        setuser({id:101,name:"dell"})
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo5</h1>
        <h1>id:{user.id}</h1>
        <h1>name:{user.name}</h1>
        <button onClick={changeUSer}>click</button>
    </div>
  )
}
