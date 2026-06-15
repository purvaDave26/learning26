import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    console.log("errors",errors)

    const submiteHandler=(data)=>
    {
         alert("form subbmited...")
        console.log("data",data)
    }

    const validationSchema={
        emailValidator:{
            required:{
                value:"true",
                message:"email is required"
            },
            minLength:
            {
                value:6,
                message:"min length 6"
            },
            maxLength:
            {
                value:30,
                message:"max length 30"
            }
        },
        ageValidator:
        {
            required:
            {
                value:"true",
                message:"Age is required"
            },
            min:
            {
                value:18,
                message:"min age 18"
            },
            max:
            {
                value:60,
                message:"max age 60"
            }

        },
        genderValidator:
        {
            required:
            {
                value:"true",
                message:"gender required"
            }
        },
        countryValidator:
        {
            required:
            {
                value:"true",
                message:"country is required"
            }
        },
        hobbyValidator:
        {
            required:
            {
                value:"true",
                message:"hobby is required"
            },
            
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo3</h1>
        <form onSubmit={handleSubmit(submiteHandler)}>
            <div>
                <label>Name:</label>
                <input type='text' {...register("name",{required:{value:true,message:"name is required"}})}></input>
                {errors.name && errors.name.message}
            </div>
            <div>
                <label>Email:</label>
                <input type='text' {...register("email",validationSchema.emailValidator)}></input>
                {errors.email?.message}
            </div>
            <div>
                <label>Age:</label>
                <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age?.message}
            </div>
            <div>
                <label>Gender</label>
                <br></br>
                male<input type='radio' value="male" {...register("gender",validationSchema.genderValidator)}></input>
                female<input type='radio' value="female" {...register("gender",validationSchema.genderValidator)}></input>
                {errors.gender?.message}
            </div>
            <div>
                <label>Country</label>
                <select {...register("country",validationSchema.countryValidator)}>
                    <option value={""}>Select country</option>
                    <option value={"india"}>India</option>
                    <option value={"usa"}>USA</option>
                    <option value={"uk"}>Uk</option>
                </select>
                {errors.country?.message}
            </div>
            <div>
                <label>Hobby:</label>
                <br></br>
                Drawing<input type='checkbox' {...register("hobby",validationSchema.hobbyValidator)} value="drawing"></input>
                Swmming<input type='checkbox' {...register("hobby",validationSchema.hobbyValidator)} value="swmming"></input>
                badminton<input type='checkbox' {...register("hobby",validationSchema.hobbyValidator)} value="badminton"></input>
                {errors.hobby?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>

        </form>
    </div>
  )
}
