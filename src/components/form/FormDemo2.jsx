import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const{register,handleSubmit}=useForm()
    const submitHandler=(data)=>
    {
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Hobby:</label>
               Drawing <input type='checkbox' {...register("drawing")} value="drawing"></input>
                Swimming<input type='checkbox' {...register("swimming")} value="swimming"></input>
                Badminton<input type='checkbox' {...register("badminton")} value="badminton"></input>
            </div>
            <div>
                <label>Country</label>
                <select {...register("country")}>
                    <option value="India">India</option>
                    <option value="usa">usa</option>
                    <option value="uk">uk</option>
                </select>
            </div>
            <div>
                <input type='submit'></input>
                </div>
        </form>
    </div>
  )
}
