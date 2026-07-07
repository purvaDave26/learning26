import React, { useEffect, useRef, useState } from 'react'

export const UseRefDemo3 = () => {
    const [message, setmessage] = useState(["hi","hello","how are you"]);
    const newmsg=useRef();
    useEffect(()=>
    {
        newmsg.current.style.color="red"
    },[message]);
    const addmsg=()=>
    {
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
        const msg="new msg";
        setmessage([...message,name])
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseRefDemo3</h1>
        {
            message.map((m,index)=>
            {
                return <li
                    ref={index === message.length - 1 ? newmsg : null}
                   style={{
                    color: index === message.length - 1 ? "yellow" : "black"}}>{m}</li>
            })
        }
        <button onClick={addmsg}>add msg</button>
    </div>
  )
}
