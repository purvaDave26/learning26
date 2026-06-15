import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const FormDemo8 = () => {
    const{register,handleSubmit,control}=useForm({defaultValues:{medicine:[{name:"",dosage:0,freq:0}]}});

    const {append,remove,fields}=useFieldArray({control,name:"medicine"})
    //fields== array
    const submitHandler=(data)=>
    {
        console.log(data);
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo8</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {
                fields.map((f,index)=>
                {
                    return <div>
                        <div>
                            <label>Name</label>
                            <input type='text' {...register(`medicine.${index}.name`)}></input>
                        </div>
                        <div>
                            <label>Dosage</label>
                            <input type='text' {...register(`medicine.${index}.dosage`)}></input>
                        </div>
                        <div>
                            <label>frequency</label>
                            <input type='text' {...register(`medicine.${index}.freq`)}></input>
                        </div>
                         <button onClick={() => remove(index)}>Remove  </button>
                    </div>
                })
            }
            <div>
                <input type='submit'></input>
               
            </div>
             
        </form>
         <button onClick={()=>{append([{name:"",dosage:0,freq:0}])}}>append</button>
       
    </div>
  )
}
