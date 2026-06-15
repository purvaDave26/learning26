import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo7 = () => {
    const{register,handleSubmit,formState:{errors},trigger}=useForm();
    const [step, setstep] = useState(1);
    const submitHandler=(data)=>
    {
        console.log(data);
    }
    const validationSchema=
    {
        nameValidator:
        {
            required:
            {
                value:true,
                message:"name is required"
            }
        },
        emailValidator:
        {
            required:
            {
                value:true,
                message:"email is required"
            }
        },
        ageValidator:
        {
            required:
            {
                value:true,
                message:"age is required"
            }
        },
        contactValidtaor:
        {
            required:
            {
                value:true,
                message:"contact is required"
            }
        },
        genderValidator:
        {
            required:
            {
                value:true,
                message:"gender is required"
            }
        },
        hobbyValidator:
        {
            required:
            {
                value:true,
                message:"hobby is required"
            }
        },
        countryValidator:
        {
            required:
            {
                value:true,
                message:"country is required"
            }
        }
    }
    const next=async()=>
    {
        let valid=false;
        if(step==1)
        {
            valid=await trigger(["name","email"])
        }
        else if(step==2)
        {
            valid=await trigger(["age","contact"])
        }
        else if(step==3)
        {
            valid=await trigger(["gender","hobby"])
        }
        else if(step==4)
        {
            valid=await trigger("country")
        }
        if(valid)
        {
            setstep(step+1)
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo7</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {
                step==1 &&(
            <div>
                <div>
                    <label>Name:</label>
                    <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                    {errors.name?.message}
                </div>
                <div>
                    <label>Email:</label>
                    <input type='text' {...register("email",validationSchema.emailValidator)}></input>
                    {errors.email?.message}
                </div>
                <div>
                    <button onClick={next}>Next</button>
                </div>
            </div>
                )            
            }
            {
                step==2 &&(<div>
                    <div>
                        <label>Age:</label>
                        <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                        {errors.age?.message}
                    </div>
                    <div>
                        <label>Contact:</label>
                        <input type='text' {...register("contact",validationSchema.contactValidtaor)}></input>
                        {errors.contact?.message}
                    </div>
                    <div>
                       
                        <button onClick={()=>setstep(step-1)}>Back</button>
                         <button onClick={next}>Next</button>
                       
                    </div>
                </div>
                )
            }
            {
                step==3 && ( <div>
                    <div>
                        <label>Gender:</label>
                        male<input type='radio' value="male" {...register("gender",validationSchema.genderValidator)}></input>
                        female<input type='radio' value="female" {...register("gender",validationSchema.genderValidator)}></input>
                        {errors.gender?.message}
                    </div>
                    <div>
                        <label>Hobby</label>
                        Drawing<input type='checkbox' value="drawing" {...register("hobby",validationSchema.hobbyValidator)}></input>    
                        Swmming<input type='checkbox' value="swmming" {...register("hobby",validationSchema.hobbyValidator)}></input>
                        Badminton<input type='checkbox' value="badminton" {...register("hobby",validationSchema.hobbyValidator)}></input>
                        {errors.hobby?.message}
                    </div>
                    <div>
                         <button onClick={()=>setstep(step-1)}>Back</button>
                         <button onClick={next}>Next</button>                       
                    </div>
                </div>
                )
            }

            {
                step==4 && (<div>
                        <div>
                            <label>Country:</label>
                            <select {...register("country",validationSchema.countryValidator)}>
                            <option value="">select country</option>
                            <option value="india">India</option>
                            <option value="usa">Usa</option>
                            <option value="uk">Uk</option>
                            </select>
                            {errors.country?.message}
                        </div>
                        <div>
                            <button onClick={()=>{setstep(step-1)}}>Back</button>
                            <input type='submit'></input>
                        </div>
                    </div>
                )
            }
        </form>
    </div>
  )
}
