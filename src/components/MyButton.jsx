import React from 'react'

export const MyButton = (props) => {
  return (
    <button onClick={()=>{props.funName()}} style={{color:props.color || "white",backgroundColor:props.bgcolor||"blue"}}>{props.name || "test"}  </button>
    //implimented in netflix home,netfilx shows
  )
}
