import React, { useEffect, useRef } from 'react'

export const UseRefDemo2 = () => {
    const divref=useRef();
    useEffect(()=>
    {
        divref.current.scrollIntoView({
            behavior:"smooth"
        })
    },[])
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseRefDemo2</h1>
        <div style={{backgroundColor:"orange",height:"800px"}}></div>
        <div style={{backgroundColor:"white",height:"800px"}}></div>
        <div ref={divref} style={{backgroundColor:"green",height:"800px"}}></div>
    </div>
  )
}
