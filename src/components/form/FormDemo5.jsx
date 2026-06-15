import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const {register,handleSubmit,formState:{errors},watch}=useForm({mode:"onChange"});
    const submitHandler=(data)=>
    {
        console.log(data);
    }
    const password=watch("password")
    const validationSchema={
        passwordValidator:
        {
            required:
            {
                value:true,
                message:"password required"
            }
        },
        confirmpasswordValidator:
        {
            validate:(params)=>
            {
                return password==params ||"both password should match"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Password:</label>
                <input type='text' {...register("password",validationSchema.passwordValidator)}></input>
                {errors.password?.message}
            </div>
            <div>
                <label>Confirmpassword:</label>
                <input type='text' {...register("confirmpassword",validationSchema.confirmpasswordValidator)}></input>
                {errors.confirmpassword?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
