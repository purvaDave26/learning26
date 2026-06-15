import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {
    const [message, setmessage] = useState("");
    const [users, setusers] = useState([]);
    const getUsers=async()=>
    {
        const res=await axios.get("https://node5.onrender.com/user/user/")
        console.log(res);
         //axios object -->5 param -->data variable -->api response
         console.log(res.data);
         console.log(res.data.message)
         console.log(res.data.data);
         setmessage(res.data.message);
         setusers(res.data.data)
    }
  return (
    <div style={{textAlign:"center"}}>
        {message}
        <h1>ApiDemo1</h1>
        <table border="1" align='center'>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>age</td>
                    <td>status</td>
                </tr>
            </thead>
            <tbody>
               {
                users.map((u)=>(
                    <tr>
                        <td>{u._id}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.age}</td>
                        <td>{u.isActive == true ? "Yes":"No"}</td>
                    </tr>
                ))
               }
            </tbody>
        </table>
        <button onClick={getUsers}>GET</button>
        {
            users.map((u)=>
            {
                return <li>{u.name}</li>
            })
        }
    </div>
  )
}
