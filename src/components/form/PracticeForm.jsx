import React from 'react'
import { useForm } from 'react-hook-form'

export const PracticeForm = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();

    const submmitHandler=(data)=>
    {
        console.log(data);
    }
    const validationSchema={
        nameValidator:
        {
            required:
            {
                value:true,
                message:"name required"
            }
        },
        contactValidator:
        {
            required:{
                value:true,
                message:"contact no required:"
            },
            validate:(param)=>
            {
                console.log("param:"+param)
                return param.length==10||"contact length 10"
            }
        },
        hobbyValidator:{
            required:{
                value:true,
                message:"hobby required"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>PracticeForm</h1>
        <form onSubmit={handleSubmit(submmitHandler)}>
            <div>
                <label>Name:</label>
                <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                {errors.name?.message}
            </div>
            <div>
                <label>contact:</label>
                <input type='text' {...register("contact",validationSchema.contactValidator)}></input>
                {errors.contact?.message}
            </div>
            <div>
              <label>Hobby</label>
              Drawing<input type='checkbox' value="drawing" {...register("hobby",validationSchema.hobbyValidator)}></input>
              Swmming<input type='checkbox' value="swmming" {...register("hobby",validationSchema.hobbyValidator)}></input>
              yoga<input type='checkbox' {...register("hobby",validationSchema.hobbyValidator)} value="yoga"></input>
              {errors.hobby?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
