import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';

export const Product = () => {

    const {register,handleSubmit}=useForm();

    const submitHandler=async(data)=>
    {
        console.log(data)
        const res=await axios.post("https://node5.onrender.com/product/create",data);
        console.log(res.data)
        toast.success("product added !!")

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Product</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name:</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>Price:</label>
                <input type='text' {...register("price")}></input>
            </div>
            <div>
                <label>description</label>
                <input type='text' {...register("description")}></input>
            </div>
            <div>
                <label>Color:</label>
                {/* <input type='text' {...register("color")}></input> */}
                Blue:<input type='checkbox' value="blue" {...register("colors")}></input>
                Red:<input type='checkbox' value="red" {...register("colors")}></input>
                Green:<input type='checkbox' value="green" {...register("colors")}></input>
            </div>
            <div>
                <label>size:</label>
                <input type='text' {...register("size")}></input>
            </div>
            <div>
                <label>Status</label><br></br>
                Active<input type='radio' value="true" {...register("isAvailable")}></input>
                notActive<input type='radio' value="false" {...register("isAvailable")}></input>
            </div>
            <div>
                <label>Unit</label>
                <input type='text' {...register("unit")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
