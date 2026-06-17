import axios from 'axios'
import React, { useEffect } from 'react'

export const ApiDemo2 = () => {
    const addUser=async()=>
    {
        const userObj={
            name:"amit",
            age:23,
            email:"amit56@gmail.com",
            password:"amit123",
            isActive:true,
        };
        const res= await axios.post("https://node5.onrender.com/user/user/",userObj);
        console.log(res);
        console.log(res.data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo2</h1>
        <button onClick={addUser}>Add</button>
    </div>
  )
}
