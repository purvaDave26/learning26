import axios from 'axios'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const AddProducts = () => {
    const{register,handleSubmit,control}=useForm({defaultValues:{"products":[{name:"",price:0,description:"",colors:[],size:"",isAvailable:true,unit:0}]}});

    const {append,remove,fields}=useFieldArray({control,name:"products"});
    const submitHandler=async(data)=>
    {
        console.log(data)
        const res=await axios.post(`https://node5.onrender.com/product/addproducts`,data);

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Add Products</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {
                 fields.map((f,index)=>
                {
                    return <div>
                <div>
                <label>Name:</label>
                <input type='text' {...register(`products.${index}.name`)}></input>
            </div>
            <div>
                <label>Price:</label>
                <input type='text' {...register(`products.${index}.price`)}></input>
            </div>
            <div>
                <label>description</label>
                <input type='text' {...register(`products.${index}.descriptio`)}></input>
            </div>
            <div>
                <label>Color:</label>
                {/* <input type='text' {...register("color")}></input> */}
                Blue:<input type='checkbox' value="blue" {...register(`products.${index}.colors`)}></input>
                Red:<input type='checkbox' value="red" {...register(`products.${index}.colors`)}></input>
                Green:<input type='checkbox' value="green" {...register(`products.${index}.colors`)}></input>
            </div>
            <div>
                <label>size:</label>
                <input type='text' {...register(`products.${index}.size`)}></input>
            </div>
            <div>
                <label>Status</label><br></br>
                Active<input type='radio' value="true" {...register(`products.${index}.isAvailable`)}></input>
                notActive<input type='radio' value="false" {...register(`products.${index}.isAvailable`)}></input>
            </div>
            <div>
                <label>Unit</label>
                <input type='text' {...register(`products.${index}.unit`)}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </div>
                })
            }
        </form>
          <button onClick={()=>{append([{name:"",price:0,description:"",color:[],size:"",isAvailable:true,unit:0}])}}>append</button>
    </div>
  )
}
