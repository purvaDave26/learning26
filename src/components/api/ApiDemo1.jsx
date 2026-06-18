import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader';

export const ApiDemo1 = () => {
    const [message, setmessage] = useState("");
    const [users, setusers] = useState([]);
    const [flag, setflag] = useState(false);

    useEffect(()=>{
        getUsers()
    },[])
    const getUsers=async()=>
    {
        setflag(true)
        const res=await axios.get("https://node5.onrender.com/user/user/")
        console.log(res);
         //axios object -->5 param -->data variable -->api response
         console.log(res.data);
         console.log(res.data.message)
         console.log(res.data.data);
         setmessage(res.data.message);
         setusers(res.data.data)
         setflag(false);
    }
  return (
    <div style={{textAlign:"center"}}>
        {message}
        <h1>ApiDemo1</h1>
        {
            flag && <Loader/>
        }
        <table className="table table-dark">
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
        {/* <button onClick={getUsers}>GET</button> */}
         {/* {
           
            users.map((u)=>
            {
                return <li>{u.name}</li>
            })
        } */}
    </div>
  )
}
