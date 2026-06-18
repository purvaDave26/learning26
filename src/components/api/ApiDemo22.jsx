import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { data, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const ApiDemo22 = () => {
    const{register,handleSubmit}=useForm();

    const navigate=useNavigate()

    const submitHandler=async(data)=>
    {
        console.log(data)
        const res=await axios.post("https://node5.onrender.com/user/user/",data);
        console.log(res);
        if(res.status==200)
        {
            // alert("user added");
            toast.success("user added..!")
            navigate("/apidemo1");
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo22</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name:</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>Age:</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>Email:</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <label>Password:</label>
                <input type='text' {...register("password")}></input>
            </div>
            <div>
                <label>Status</label> <br></br>
                active:<input type='radio' value="true" {...register("isActive")}></input>
                not Active:<input type='radio' value="false" {...register("isActive")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
