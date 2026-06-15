import React, { useState } from 'react'

export const UseStateDemo7 = () => {
    const[users,setUsers]=useState(["ram","shyam","krishna"])

    const addName=()=>{
        const alph="abcdefghijklmnopqrstuvwxyz"
        let size=5;
        var name="";
        for(let i=0;i<size;i++)
        {
            var randomIndex=Math.floor(Math.random()*alph.length)
            // console.log(randomIndex)
            // console.log(alph[randomIndex])
            name=name+alph[randomIndex]
        }

        // var updateUser=[...users,"purva"]
        // setUsers(updateUser)

        // setUsers([...users,"purva"])

        setUsers([...users,name])
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo7</h1>
        {
            users.map((user)=>
            {
                return <li>{user}</li>
            })
        }
        <button onClick={addName}>ADD</button>
    </div>
  )
}
