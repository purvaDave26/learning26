import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader';
import { toast } from 'react-toastify';
import { Modal } from 'react-bootstrap';

export const ApiDemo1 = () => {
    const [message, setmessage] = useState("");
    const [users, setusers] = useState([]);
    const [flag, setflag] = useState(false);
    const [show, setshow] = useState(false)
    const [sigleUser, setsigleUser] = useState({});

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

    const deleteUser=async(id)=>
    {
        const res=await axios.delete(`https://node5.onrender.com/user/user/${id}`)
        console.log(res);
        if(res.status)
        {
            toast.error("user deleted...")
            getUsers()
        }
        
    }

    const getUserDetails=async(id)=>
    {
        setflag(true)
        const res=await axios.get(`https://node5.onrender.com/user/user/${id}`)
         console.log("res..",res)
         //res.data --->api response
    //res.data.data -->object ..
        setsigleUser(res.data.data)
        setshow(true)
        setflag(false)
        
    }

    const handelClose=()=>
    {
        setshow(false);
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
                    <td>Action</td>
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
                        <td>
                            <button className="btn btn-danger" onClick={()=>{deleteUser(u._id)}}>Delete</button>
                            <button className="btn btn-primary" onClick={()=>getUserDetails(u._id)}>Details</button>
                        </td>
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
        <Modal show={show} onHide={handelClose}>
            <Modal.Header>User Details</Modal.Header>
            <Modal.Body>
                <p>Name={sigleUser.name}</p>
                <p>Age={sigleUser.age}</p>
            </Modal.Body>
        </Modal>
    </div>
  )
}
