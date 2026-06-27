import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Updateuser = () => {
    const id=useParams().id;
    const navigate=useNavigate();
    const {register,handleSubmit}=useForm({defaultValues:async()=>
    {
        const res=await axios.get(`https://node5.onrender.com/user/user/${id}`)
        console.log(res.data.data)
        return res.data.data
    }
    });

    const submitHadaler=async(data)=>
    {
        console.log("data..",data);
        try{
            delete data._id;
            const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
            console.log("res...",res)
             if(res.status==200){
                toast.success("data updated..")
                navigate("/apidemo1")

            }
        }
        catch(err)
        {
            console.log("err:",err);
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>edit and update</h1>
         <form onSubmit={handleSubmit(submitHadaler)}>
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
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
