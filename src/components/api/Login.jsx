import axios from 'axios';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ThemeContext } from '../ThemeContext';
import { AuthContext } from '../../AuthContext';

export const Login = () => {
    const {register,handleSubmit}=useForm();
    const {tokan,settokan} = useContext(AuthContext)
    const submitHandlar=async(data)=>
    {
         
        console.log(data);
        const res=await axios.post("https://node5.onrender.com/user/login",data);
        console.log(res.data.data);

        localStorage.setItem("tokan",res.data.data);

       document.cookie = `token=${res.data.data};path=/`;
       console.log(document.cookie);

        settokan(tokan)
        // localStorage.setItem(tokan)

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
