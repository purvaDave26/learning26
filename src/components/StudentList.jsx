import React from 'react'

export const StudentList = (props) => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>StudentList</h1>
        <h1>Name:{props.name}</h1>
        <h1>Age:{props.age}</h1>
        <h1>student name:{props.stu.name}</h1>
        <h1>flag in child {props.flag==true ? "loading..":"not loading.."}</h1>
        <button onClick={props.stopLoad}>Stop load</button>
        <h1>{props.sales}</h1>
        <button onClick={()=>{props.setsales(200)}}>change</button>
        {props.subjects.map((s)=>
        {
            return <li>{s}</li> })}
        
    </div>
  )
}
