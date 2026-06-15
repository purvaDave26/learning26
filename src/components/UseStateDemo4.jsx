import React, { useState } from 'react'

export const UseStateDemo4 = () => {
    const [user,setUser]=useState({id:1,name:"test"})
    const changeUser=()=>
    {
        setUser({id:101,name:"TEST"})
    }
  return (
    <div style={{textAlign:"center"}}>
        <h2>UseStateDemo4</h2>
        <h2>ID:{user.id}</h2>
        <h2>Name:{user.name}</h2>
        <button onClick={()=>changeUser()}>Change</button>
    </div>
  )
}
