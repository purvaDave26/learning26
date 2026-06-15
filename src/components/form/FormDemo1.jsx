import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const{register,handleSubmit}=useForm();
    const [display, setdisplay] = useState({})
    const [flag, setflag] = useState(false)
    const submitHandler=(data)=>
    {
        console.log(data)
        setdisplay(data)
        setflag(true)
    }
   
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <lable>
                    Name:
                </lable>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>Age</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>Gender</label>
                <br></br>
                male:<input type='radio' value="male" {...register("gender")}></input>
                female:<input type='radio' value="female" {...register("gender")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
        {  
        flag &&
        <div>
        <h1>Name:{display.name}</h1>
        <h1>Age:{display.age}</h1>
        <h1>Gender:{display.gender}</h1>
        </div>
        }
    </div>
  )
}
