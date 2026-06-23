import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

export const Login = () => {
    const {register,handleSubmit}=useForm();

    const submitHandlar=async(data)=>
    {
        console.log(data);
        const res=await axios.post("https://node5.onrender.com/user/login",data);
        console.log(res.data.data);

        localStorage.setItem("tokan",res.data.data);


    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submitHandlar)}>
            <div>
                <label>Email</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <label>PassWord:</label>
                <input type='text' {...register("password")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
