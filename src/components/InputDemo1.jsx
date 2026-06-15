import React, { use, useState } from 'react'

export const InputDemo1 = () => {
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const[clicked,setClicked]=useState(false);
    const [color, setcolor] = useState("black");
    const [gender, setgender] = useState("");
    const [country, setcountry] = useState("")
    const [state, setstate] = useState("")

    

    const nameHandler=(event)=>
    {
        // console.log(event.target.value);
        setName(event.target.value)
    }
    const ageHandler=(event)=>
    {
        //  console.log(event.target.value);
        setAge(event.target.value)
    }
    const clickHandler=()=>
    {
        setClicked(true)
    }
    const colorHandler=(event)=>
    {
        // console.log(event.target.value);
        setcolor(event.target.value)
    }

    const genderHandler=(event)=>
    {
        console.log(event.target.value);
        setgender(event.target.value);
    }
    const countryHandler=(event)=>
    {
       const updateCountry=event.target.value;
       setcountry(updateCountry);
       console.log(updateCountry);
    }
    const stateHandler=(event)=>
    {
       const updateStates= event.target.value
       setstate(updateStates)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Input demo 1</h1>
        <div>
            <label>NAME:</label>
            <input type='text' onChange={(event)=>nameHandler(event)}></input>
            {/* {name} */}
        </div>
         <div>
            <label>AGE:</label>
            <input type='text' onChange={(event)=>ageHandler(event)}></input>
            {/* {age} */}
        </div>
        <div>
            <label>Color</label>
            <input type='color' onChange={(event)=>colorHandler(event)}></input>
        </div>
          <div>
            <label>Gender:</label>
            <label>Male</label>
            <input type='radio' onClick={(event)=>genderHandler(event)}  name='gender' value={'male'}></input>
            <label>Female</label>
            <input type='radio' onClick={(event)=>genderHandler(event)}  name='gender' value={'female'}></input>
        </div>
       
        <div>
            <label>Country</label>
            <select onClick={(event=>countryHandler(event))}>
                <option disabled>---country---</option>
                <option value="india">India</option>
                <option value="usa" >USA</option>
                <option value="canada" >Canada</option>
            </select>
        </div>
        {
            country=='india' &&
            <div>
            <label>India</label>
            <select>
                <option>--state--</option>
                <option value={'gujarat'}>Gujarat</option>
                <option value={'gujarat'}>Maharashtra</option>
                <option value={'gujarat'}>Rajasthan</option>
            </select>
         </div>
        }
        {
            country=='usa' &&
         <div>
            <label>USA</label>
            <select>
                <option>--state--</option>
                <option>California</option>
                <option>New York</option>
                <option>Washington</option>
            </select>
        </div>
        
        }
        {
             country=='canada' &&
         <div>
            <label>CANADA</label>
            <select>
                <option>--state--</option>
                <option>Ontario</option>
                <option>New Brunswick</option>
                <option>Alberta</option>
            </select>
        </div>
        }
         <div>
            <button onClick={(event)=>clickHandler(event)}>Click</button>
        </div>
        {
            clicked &&
            <div style={{color:color}}>
                <h1>Output</h1>
                <h1>NAME:{name}</h1>
                <h1>AGE:{age}</h1>
                <h1>Gender:{gender}</h1>
                <h1>Country:{country}</h1>
                <h1>Sates:{state}</h1>
            </div>
        }
    </div>
  )
}
