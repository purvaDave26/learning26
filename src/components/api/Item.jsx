import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Item = () => {

    const [users, setusers] = useState([]);
     useEffect(()=>{
            getuser()
        },[])
    const getuser=async()=>
    {
     const res=await axios.get(`https://node5.onrender.com/item`,{
      headers:{
       // "Authorization":`Bearer ${localStorage.getItem("tokan")}`
          "Authorization": `Bearer ${
        document.cookie.split("; ").find(row => row.startsWith("token="))?.split("=")[1]}`,
    }
    
      
    
    

})
    setusers(res.data.data);  
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Item</h1>
        <button onClick={getuser}>get user</button>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>color</th>
                    <th>states</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((u)=>
                    {
                        return(
                             <tr>
                            <td>{u._id}</td>
                            <td>{u.name}</td>
                            <td>{u.price}</td>
                            <td>{u.color}</td>
                            <td>{u.status == true ? "Yes":"No"}</td>
                        </tr>
                        )
                       
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
