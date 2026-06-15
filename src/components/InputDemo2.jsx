import React, { useState } from 'react'

export const InputDemo2 = () => {
    const [hobbies, sethobbies] = useState([])
    const hobbiesHandler=(event)=>
    {
        var checked=event.target.checked;
        if(checked)
        {
              sethobbies([...hobbies,event.target.value])
        }
        else
        {
            const filterHobby=hobbies.filter((h)=>
            {
                return h!=event.target.value;
            })
            sethobbies(filterHobby)
        }
      
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo2</h1>  
        Reading<input type='checkbox' name='hobby' value='reading' onChange={(event=>hobbiesHandler(event))}/>
        Chess<input type='checkbox' name='hobby' value='chess' onChange={(event=>hobbiesHandler(event))}/>
        Traveling<input type='checkbox' name='hobby' value='traveling' onChange={(event=>hobbiesHandler(event))}/>

        {
            hobbies.map((hobby)=>
            {
                return <li>{hobby}</li>
            })
        }
    </div>
  )
}
